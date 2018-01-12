<?php
/**
 * Created by PhpStorm.
 * User: James
 * Date: 19/07/2017
 * Time: 11:13
 */

namespace Theme;


class Subscribe
{
    /**
     * Process the submitted input
     * @param $inputs
     * @return array
     */
    public static function processForm($inputs)
    {
        $errors = [];

        foreach($inputs as $field => $input) {
            if ( $field == 'email') {
                if ( ! static::validateField($input, 'email') )
                    $errors[$field] = static::getErrorMessage($field);
            }
            elseif ( $field == 'first_name' || $field == 'last_name' || $field == 'name' || $field == 'message' ) {
                if ( ! static::validateField($input, 'required') )
                    $errors[$field] = static::getErrorMessage('text');
            }
        }

        return $errors;
    }

    /**
     * @param array $to
     * @param array $cc
     * @param array $bcc
     * @param null $from
     * @param string $subject
     * @param string $message
     */
    public static function fireEmail(array $to, array $cc, array $bcc, $from = null, $subject = '', $message = '')
    {
        $headers[] = 'Content-Type: text/html; charset=UTF-8' . "\r\n";

        if ( $from )
            $headers[] = "From: $from" . "\r\n";

        if ( count($cc) ) {
            foreach( $cc as $address ) {
                $headers[] = "Cc: $address";
            }
        }
        if ( count($bcc) ) {
            foreach( $bcc as $address ) {
                $headers[] = "Bcc: $address";
            }
        }

        wp_mail($to, $subject, $message, $headers);
    }

    /**
     * Quickly validate the supplied value based on supplied rule
     * @param $value
     * @param $rule
     * @return bool
     */
    protected static function validateField($value, $rule)
    {
        $isValid = false;

        switch ($rule) {
            case 'required':
                if ( strlen($value) )
                    $isValid = true;
                break;
            case 'email':
                if ( strlen($value) && filter_var($value, FILTER_VALIDATE_EMAIL) )
                    $isValid = true;
                break;
        }

        return $isValid;
    }

    /**
     * Get error message for supplied field type
     * @param $fieldType
     * @return string
     */
    protected static function getErrorMessage($fieldType)
    {
        $message = '';

        switch ($fieldType) {
            case 'text' :
                $message = 'This field is required';
                break;
            case 'email' :
                $message = 'This field must be a valid email';
                break;
        }

        return $message;
    }
}