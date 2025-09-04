<?php
/**
 * TextInput - Youkyouk
 */
?>

<div class="form-group">
    <label for="<?= $name ?? 'inputField' ?>"><?= $label ?? 'Label' ?></label>
    <input type="<?= $type ?? 'text' ?>" 
           class="form-control" 
           id="<?= $name ?? 'inputField' ?>" 
           name="<?= $name ?? 'inputField' ?>" 
           placeholder="<?= $placeholder ?? '' ?>" 
           value="<?= $value ?? '' ?>">
</div>

<script>
// 
$('#<?= $name ?? 'inputField' ?>').on('input', function() {
    console.log('Input changed:', $(this).val());
});
</script>
