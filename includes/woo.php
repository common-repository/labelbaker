<?php
defined('ABSPATH') || exit;

add_action('rest_api_init', 'labelbaker_register_woocommerce_products_api');

function labelbaker_register_woocommerce_products_api()
{
    register_rest_route('labelbaker/v1', '/products', array(
        'methods' => 'GET',
        'callback' => 'labelbaker_get_woocommerce_products',
        'permission_callback' => function () {
            return true;
            // return current_user_can( 'edit_posts' );
        },
    ));
}


function labelbaker_get_woocommerce_products($request)
{
    if (!labelbaker_is_woo_exists()) {
        return;
    }
    $products = array();

    // WooCommerce product query
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => -1,
    );

    $product_query = new WP_Query($args);

    if ($product_query->have_posts()) {
        while ($product_query->have_posts()) {
            $product_query->the_post();
            global $product;

            // Extract necessary product data
            $product_data = array(
                'id' => $product->get_id(),
                'title' => $product->get_name(),

                // Add more fields as needed
            );

            // Add the product data to the response array
            $products[] = $product_data;
        }
    }

    wp_reset_postdata();

    // Return the products as a JSON response
    return rest_ensure_response($products);
}
