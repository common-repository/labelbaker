<?php

namespace LabelBaker;

class Banner
{

	use BaseTrait;

	public function init()
	{
		add_shortcode('labelbaker_banner', array($this, 'labelbaker_banner_shortcode'));
		add_shortcode('labelbaker_app', array($this, 'labelbaker_banner_shortcode'));
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

	public function labelbaker_banner_shortcode($atts)
	{
		$bannerId = $this->getId(5);
		$atts = shortcode_atts(
			array(
				'id'    => '',
				'width' => '100%',
			),
			$atts,
			'labelbaker_banner'
		);

		$template_id = $atts['id'];
		$width       = $atts['width'];
		// Enqueue JavaScript file
		wp_enqueue_script('labelbaker-jspdf', 'https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js', array(), LABELBAKER_VERSION, true);
		wp_enqueue_script('labelbaker-banner-js', 'https://cdn.jsdelivr.net/npm/@fatal_error/banner_popup@1.0.11', array(), LABELBAKER_VERSION, true);

		// Enqueue CSS file
		wp_enqueue_style('labelbaker-banner-css', 'https://cdn.jsdelivr.net/npm/@fatal_error/banner_popup@1.0.11/style.css', array(), LABELBAKER_VERSION);

		ob_start(); // Start output buffering

		// Output HTML and JavaScript
?>
		<div id="<?php echo esc_attr($bannerId) ?>"></div>
		<script>
			document.addEventListener('DOMContentLoaded', function() {
				const templateID = '<?php echo esc_js($template_id); ?>';
				const bannerConfig = {
					url: "<?php echo esc_js(get_rest_url(null, '/labelbaker/v1')); ?>" +
						"/template/" + templateID,
					width: '<?php echo esc_js($width); ?>',
					container: '<?php echo esc_attr($bannerId) ?>'
				};
				labelbaker.labelbakerBanner(bannerConfig);
			});
		</script>
<?php

		return ob_get_clean(); // Return the buffered content
	}
}
