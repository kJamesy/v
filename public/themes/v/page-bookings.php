<?php
/**
 ** Bookings Page Template
 *  Template Name: Page - Bookings Page
 */
global $post;
$bg_image = get_field('big_background_image');

$errors = [];
$success = false;
$recipient = get_field('bookings_recipient', 'options');
$success_message = get_field('bookings_success_message', 'options');

$isSubmitted = array_key_exists('isSubmitted', $_POST) && $_POST['isSubmitted'];
$first_name = array_key_exists('first_name', $_POST) && $_POST['first_name'] ? sanitize_text_field($_POST['first_name']) : '';
$last_name = array_key_exists('last_name', $_POST) && $_POST['last_name'] ? sanitize_text_field($_POST['last_name']) : '';
$email = array_key_exists('email', $_POST) && $_POST['email'] ? sanitize_email($_POST['email']) : '';
$message = array_key_exists('message', $_POST) && $_POST['message'] ? sanitize_textarea_field($_POST['message']) : '';

if ( $isSubmitted ) {
	$errors = \Theme\Subscribe::processForm(compact('first_name', 'last_name', 'email', 'message'));
	if ( ! count($errors) ) {
		$message = nl2br($message);
		$subject = 'New Booking Message via the Website';
		$htmlMessage = "<p><strong>First Name:</strong> $first_name</p>";
		$htmlMessage = "<p><strong>Last Name:</strong> $last_name</p>";
		$htmlMessage .= "<p><strong>Email:</strong> $email</p>";
		$htmlMessage .= "<p><strong>Message:</strong> <br /> $message</p>";
		\Theme\Subscribe::fireEmail(
			$to = [$recipient],
			$cc = [],
			$bcc = [],
			$from = $email,
			$sbjct = $subject,
			$msg = nl2br($htmlMessage)
		);
		$success = true;
	}
}

get_header();

if ( have_posts() ) :
    while (have_posts()) : the_post(); ?>
        <section class="banner onload-image-fade-in onload-content-fade-right style2 orient-right content-align-left fullscreen vbanner1">
            <div class="content">
                <h1><?php the_title(); ?></h1>
                <?php if ( ! $success ) : the_content(); endif; ?>
                <p>&nbsp;</p><?php
                if ( $success ) : ?>
                    <div class="success text-center">
                        <p><?= $success_message; ?></p>
                        <p>&nbsp;</p>
                        <p><a href="<?php the_permalink(); ?>" class="button big wide">Click here to reset the form</a></p>
                    </div> <?php
                else :
                    if ( count($errors) ) : ?>
                        <p class="text-danger">
                            <i class="fas fa-exclamation-triangle"></i>
                            There were errors with your submission. Please check and try again.
                        </p>
                        <p>&nbsp;</p> <?php
                    endif; ?>
                    <form method="post" action="<?php the_permalink(); ?>">
                        <div class="field half first <?= array_key_exists('first_name', $errors) ? 'has-danger' : ''; ?>">
                            <label for="first_name">First Name</label>
                            <input name="first_name" id="first_name" type="text">
                        </div>
                        <div class="field half <?= array_key_exists('last_name', $errors) ? 'has-danger' : ''; ?>">
                            <label for="last_name">Last Name</label>
                            <input name="last_name" id="last_name" type="text">
                        </div>
                        <div class="field <?= array_key_exists('email', $errors) ? 'has-danger' : ''; ?>">
                            <label for="email">Email</label>
                            <input name="email" id="email" type="email">
                        </div>
                        <div class="field <?= array_key_exists('message', $errors) ? 'has-danger' : ''; ?>">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" rows="4"></textarea>
                        </div>
                        <input type="hidden" name="isSubmitted" value="1" />
                        <ul class="actions">
                            <li><input name="submit" id="submit" value="Send Message" type="submit"></li>
                        </ul>
                    </form> <?php
                endif; ?>
            </div> <?php
	        if ( $bg_image ) : ?>
                <div class="image">
                    <img src="<?= $bg_image; ?>" alt="<?php bloginfo('name'); ?>" />
                </div> <?php
	        endif; ?>
        </section> <?php
    endwhile;
else :
    get_template_part('template-parts/content', 'none');
endif;
get_footer(); ?>
