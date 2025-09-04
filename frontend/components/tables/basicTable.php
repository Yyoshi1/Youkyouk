<?php
/**
 * BasicTable - Youkyouk
 */
?>

<table class="table table-striped" id="basicTable">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <?phو تحميل افتراضي (كمثال)
    // هنا مجرد بيانات ثابتة لتوضيح الجدول
    $users = [
        ['id'=>1,'name'=>'John Doe','email'=>'john@example.com','role'=>'admin'],
        ['id'=>2,'name'=>'Jane Smith','email'=>'jane@example.com','role'=>'user'],
    ];

    foreach($users as $user) {
        echo "<tr>";
        echo "<td>{$user['id']}</td>";
        echo "<td>{$user['name']}</td>";
        echo "<td>{$user['email']}</td>";
        echo "<td>{$user['role']}</td>";
        echo "<td>
                <button class='btn btn-danger btn-sm deleteBtn' data-id='{$user['id']}'>Delete</button>
              </td>";
        echo "</tr>";
    }
    ?>
  </tbody>
</table>

<script>
// ربط زر الحذف مع ConfirmModal
$('.deleteBtn').on('click', function() {
    let userId = $(this).data('id');
    openConfirmModal('delete_user', userId); // action 'delete_user' سيتم التعامل معها في ajax.php
});
</script>
