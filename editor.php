<?php
/**
 * Plugin Name:     Editor Gutenberg
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     Plugin for Gutenberg development
 * Author:          Anastasia Belyaeva
 * Author URI:      YOUR SITE HERE
 * Text Domain:     editor
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Editor
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
};

function redactor_block_editor_assets(){
	wp_enqueue_script(
		'redactor-editor-script',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		[ 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ],
		'1.0.0'
	);
	wp_enqueue_style(
		'redactor-editor-style',
		plugin_dir_url( __FILE__ ) . 'build/module.css',
		[],
		'1.0.0'
	);
}
add_action( 'enqueue_block_editor_assets', 'redactor_block_editor_assets' );

function redactor_block_assets(){
	wp_enqueue_script(
		'redactor-editor-script-fancybox',
		plugin_dir_url( __FILE__ ) . 'lib/fancybox.min.js',
		array('jquery'),
		'1.0.0'
	);
	wp_enqueue_script(
		'redactor-editor-script',
		plugin_dir_url( __FILE__ ) . 'build/module.js',
		array('jquery'),
		'1.0.0'
	);
	wp_enqueue_style(
		'redactor-editor-style-swiper',
		plugin_dir_url( __FILE__ ) . 'lib/swiper.min.css',
		[],
		'1.0.0'
	);
	wp_enqueue_style(
		'redactor-editor-style-fancybox',
		plugin_dir_url( __FILE__ ) . 'lib/fancybox.min.css',
		[],
		'1.0.0'
	);
}
add_action( 'enqueue_block_assets', 'redactor_block_assets' );


