<?php

if (!defined('ABSPATH')) {
    exit;
}

?>

<div id="wrap-imageseo">
    <div class="wrap">
		<div id="js-module-imageseo"></div>
    </div>
</div>


<input type="hidden" id="_nonce_imageseo_register" value="<?php echo wp_create_nonce('imageseo_register'); // phpcs:ignore WordPress.Security.EscapeOutput ?>">
<input type="hidden" id="_nonce_imageseo_login" value="<?php echo wp_create_nonce('imageseo_login'); // phpcs:ignore WordPress.Security.EscapeOutput ?>">
<input type="hidden" id="_nonce_imageseo_valid_api_key" value="<?php echo wp_create_nonce('imageseo_valid_api_key'); // phpcs:ignore WordPress.Security.EscapeOutput ?>">
<input type="hidden" id="_nonce_imageseo_proxy" value="<?php echo wp_create_nonce('imageseo_proxy'); // phpcs:ignore WordPress.Security.EscapeOutput ?>">
<input type="hidden" id="_nonce_imageseo_save_global_settings" value="<?php echo wp_create_nonce('imageseo_save_global_settings'); // phpcs:ignore WordPress.Security.EscapeOutput ?>">
<input type="hidden" id="_nonce_imageseo_save_social_settings" value="<?php echo wp_create_nonce('imageseo_save_social_settings'); // phpcs:ignore WordPress.Security.EscapeOutput ?>">
<input type="hidden" id="_nonce_imageseo_social_media_settings_save" value="<?php echo wp_create_nonce('social_media_settings_save'); // phpcs:ignore WordPress.Security.EscapeOutput ?>">
