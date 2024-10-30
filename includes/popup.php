<?php

namespace LabelBaker;

class Popup
{

	use BaseTrait;

	public function init()
	{
		add_shortcode('labelbaker_popup', array($this, 'labelbaker_popup_shortcode'));
	}

	public function getId($n)
	{
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$randomString = '';

		for ($i = 0; $i < $n; $i++) {
			$index = rand(0, strlen($characters) - 1);
			$randomString .= $characters[$index];
		}

		return $randomString;
	}

	public function labelbaker_popup_shortcode($atts)
	{
		$popupId = $this->getId(5);
		$atts = shortcode_atts(
			array(
				'id'    => '',
				'width' => '100%',
				'show_once' => 'true',
			),
			$atts,
			'labelbaker_popup'
		);

		$template_id = $atts['id'];
		$showOnce	 = $atts['show_once'];
		$width       = $atts['width'];
		// Enqueue JavaScript file
		wp_enqueue_script('labelbaker-popup-js', 'https://cdn.jsdelivr.net/npm/@fatal_error/banner_popup@1.0.11', array(), LABELBAKER_VERSION, true);

		// Enqueue CSS file
		wp_enqueue_style('labelbaker-popup-css', 'https://cdn.jsdelivr.net/npm/@fatal_error/banner_popup@1.0.11/style.css', array(), LABELBAKER_VERSION);

		ob_start(); // Start output buffering

		// Output HTML and JavaScript
?>
		<div id="<?php echo esc_attr($popupId) ?>"></div>
		<script>
			document.addEventListener('DOMContentLoaded', function() {
				const templateID = '<?php echo esc_js($template_id); ?>';
				const popupConfig = {
					url: "<?php echo esc_js(get_rest_url(null, '/labelbaker/v1')); ?>" +
						"/template/" + templateID,
					width: '<?php echo esc_js($width); ?>',
					showOnce: <?php echo esc_html($showOnce); ?>,
				};
				labelbaker.labelbakerPopup(popupConfig);
			});
		</script>
<?php

		return ob_get_clean(); // Return the buffered content
	}
}
