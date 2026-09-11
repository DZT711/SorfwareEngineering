const studentStorageKey = 'day1-students';
let students = [];

function getStudentField(id) {
  return document.getElementById(id);
}

function escapeStudentHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function showStudentMessage(message, isError = true) {
  const messageEl = getStudentField('student-message');
  messageEl.textContent = message;
  messageEl.style.color = isError ? '#a34729' : '#287052';
}

function resetStudentForm() {
  getStudentField('student-form').reset();
  getStudentField('student-id').value = '';
  getStudentField('student-form-title').textContent = 'Thêm sinh viên';
  getStudentField('student-submit').textContent = 'Thêm sinh viên';
  getStudentField('student-cancel').hidden = true;
}

function saveStudents() {
  localStorage.setItem(studentStorageKey, JSON.stringify(students));
}

function renderStudents() {
  const searchField = getStudentField('student-search');
  const filterField = getStudentField('student-filter');
  const sortField = getStudentField('student-sort');
  const search = searchField ? searchField.value.trim().toLowerCase() : '';
  const filter = filterField ? filterField.value : 'all';
  const sort = sortField ? sortField.value : 'name';
  const visibleStudents = students
    .filter(student => filter === 'all' || student.status === filter)
    .filter(student => `${student.name} ${student.email}`.toLowerCase().includes(search))
    .sort((first, second) => {
      if (sort === 'newest') return second.createdAt - first.createdAt;
      if (sort === 'age') return first.age - second.age;
      return first.name.localeCompare(second.name, 'vi');
    });

  getStudentField('student-table-body').innerHTML = visibleStudents.map(student => `
    <tr>
      <td><div class="student-name">${escapeStudentHtml(student.name)}</div><div class="student-id">${escapeStudentHtml(student.id)} · ${escapeStudentHtml(student.email)}</div></td>
      <td>${student.age} tuổi<br>${escapeStudentHtml(student.gender)}</td>
      <td>${escapeStudentHtml(student.major)}</td>
      <td><span class="student-badge ${student.status === 'inactive' ? 'inactive' : ''}">${student.status === 'active' ? 'Đang học' : 'Bảo lưu'}</span></td>
      <td><div class="student-row-actions"><button class="student-icon-button" type="button" data-student-action="edit" data-student-id="${student.id}">Sửa</button><button class="student-button danger" type="button" data-student-action="delete" data-student-id="${student.id}">Xóa</button></div></td>
    </tr>`).join('');

  getStudentField('student-empty').hidden = visibleStudents.length > 0;
  const totalElement = getStudentField('student-total');
  const activeElement = getStudentField('student-active');
  const majorsElement = getStudentField('student-majors');
  if (totalElement) totalElement.textContent = students.length;
  if (activeElement) activeElement.textContent = students.filter(student => student.status === 'active').length;
  if (majorsElement) majorsElement.textContent = new Set(students.map(student => student.major)).size;
}

function showAllStudents() {
  const searchField = getStudentField('student-search');
  const filterField = getStudentField('student-filter');
  const sortField = getStudentField('student-sort');
  if (searchField) searchField.value = '';
  if (filterField) filterField.value = 'all';
  if (sortField) sortField.value = 'name';
  renderStudents();
}

function startStudentEdit(studentId) {
  const student = students.find(item => item.id === studentId);
  if (!student) return;
  getStudentField('student-id').value = student.id;
  getStudentField('student-name').value = student.name;
  getStudentField('student-email').value = student.email;
  getStudentField('student-age').value = student.age;
  getStudentField('student-major').value = student.major;
  getStudentField('student-gender').value = student.gender;
  getStudentField('student-status').value = student.status;
  getStudentField('student-form-title').textContent = 'Chỉnh sửa sinh viên';
  getStudentField('student-submit').textContent = 'Lưu thay đổi';
  getStudentField('student-cancel').hidden = false;
  getStudentField('student-name').focus();
}

function deleteStudent(studentId) {
  const student = students.find(item => item.id === studentId);
  if (!student || !window.confirm(`Xóa sinh viên ${student.name}?`)) return;
  students = students.filter(item => item.id !== studentId);
  saveStudents();
  renderStudents();
  showStudentMessage('Đã xóa sinh viên.', false);
}

function initStudentManager() {
  try {
    students = JSON.parse(localStorage.getItem(studentStorageKey) || '[]');
    if (!Array.isArray(students)) students = [];
  } catch (error) {
    students = [];
    console.error('Không thể đọc danh sách sinh viên:', error);
  }

  getStudentField('student-form').addEventListener('submit', event => {
    event.preventDefault();
    const name = getStudentField('student-name').value.trim();
    const email = getStudentField('student-email').value.trim();
    const age = Number(getStudentField('student-age').value);
    if (!name || !email || !Number.isInteger(age) || age < 16 || age > 80) {
      showStudentMessage('Vui lòng nhập tên, email hợp lệ và tuổi từ 16 đến 80.');
      return;
    }
    const studentData = { name, email, age, major: getStudentField('student-major').value, gender: getStudentField('student-gender').value, status: getStudentField('student-status').value };
    const existingId = getStudentField('student-id').value;
    if (existingId) {
      const index = students.findIndex(student => student.id === existingId);
      students[index] = { ...students[index], ...studentData };
      showStudentMessage('Đã cập nhật thông tin sinh viên.', false);
    } else {
      students.push({ ...studentData, id: `SV-${String(Date.now()).slice(-6)}`, createdAt: Date.now() });
      showStudentMessage('Đã thêm sinh viên vào danh sách.', false);
    }
    saveStudents();
    renderStudents();
    resetStudentForm();
  });

  getStudentField('student-cancel').addEventListener('click', resetStudentForm);
  ['student-search', 'student-filter', 'student-sort'].forEach(id => {
    const field = getStudentField(id);
    if (field) field.addEventListener('input', renderStudents);
  });
  const showAllButton = getStudentField('student-show-all');
  if (showAllButton) showAllButton.addEventListener('click', showAllStudents);
  getStudentField('student-table-body').addEventListener('click', event => {
    const button = event.target.closest('[data-student-action]');
    if (!button) return;
    if (button.dataset.studentAction === 'edit') startStudentEdit(button.dataset.studentId);
    if (button.dataset.studentAction === 'delete') deleteStudent(button.dataset.studentId);
  });
  renderStudents();
}

document.addEventListener('DOMContentLoaded', initStudentManager);
