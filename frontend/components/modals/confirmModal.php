<?php
/**
 * ConfirmModal - Youkyouk
 */
?>

<!-- Modal Structure -->
<div id="confirmModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirmModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="confirmModalLabel">Confirm Action</h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p id="confirmMessage">Are you sure you want to proceed?</p>
      </div>
      <div class="modal-footer">
        <button type="button" id="cancelBtn" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" id="confirmBtn" class="btn btn-danger">Confirm</button>
      </div>
    </div>
  </div>
</div>

<script>
// 
let currentAction = null;
let currentItemId = null;

// 
function openConfirmModal(action, itemId, message = "Are you sure you want to proceed?") {
    currentAction = action;
    currentItemId = itemId;
    $('#confirmMessage').text(message);
    $('#confirmModal').modal('show');
}

// 
$('#confirmBtn').on('click', function() {
    if(currentAction && currentItemId) {
        $.ajax({
            url: '/backend/api/ajax.php',
            type: 'POST',
            data: {
                action: currentAction,
                item_id: currentItemId
            },
            success: function(response) {
                // 
                alert("Action completed successfully.");
                $('#confirmModal').modal('hide');
                // م
                if(currentAction === 'delete_user') {
                    $(`#basicTable button[data-id='${currentItemId}']`).closest('tr').remove();
                }
            },
            error: function() {
                alert("There was an error executing this action.");
                $('#confirmModal').modal('hide');
            }
        });
    }
});
</script>
