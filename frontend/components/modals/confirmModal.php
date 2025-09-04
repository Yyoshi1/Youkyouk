<?php
/**
 * Confirm Modal - Youkyouk
 */
?>

<div id="confirmModal" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Confirm Action</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Are you sure you want to proceed?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" id="confirmBtn">Confirm</button>
      </div>
    </div>
  </div>
</div>

<script>
let currentAction = null;
let currentItemId = null;

// Function to open the modal for a specific action/item
function openConfirmModal(action, itemId) {
    currentAction = action;
    currentItemId = itemId;
    $('#confirmModal').modal('show');
}

// Handle confirm button click
$('#confirmBtn').on('click', function() {
    if (!currentAction || !currentItemId) return;

    // Example AJAX request to backend
    $.ajax({
        url: '../../backend/api/ajax.php',
        method: 'POST',
        data: {
            action: currentAction,
            item_id: currentItemId
        },
        success: function(response) {
            let res = JSON.parse(response);
            if(res.status === 'success') {
                alert(res.message); // 
                location.reload(); // 
            } else {
                alert('Error: ' + res.message);
            }
            $('#confirmModal').modal('hide');
        },
        error: function() {
            alert('Request failed. Please try again.');
            $('#confirmModal').modal('hide');
        }
    });
});
</script>
