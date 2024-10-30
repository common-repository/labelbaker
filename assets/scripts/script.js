jQuery(document).ready(function ($) {

    labelabker_menu_fold()

    $(window).on('hashchange', function () {
        labelabker_menu_fold()
    });


    function labelabker_menu_fold() {
        var body = $('body');
        menuFix(location.hash);
        const isEditorUrl = (url) => {
        
            // Define the regex pattern for matching "#/editor/{template_id}"
            const pattern = /^#\/editor\/\w+$/;
    
            // Test if the URL matches the pattern
            return pattern.test(url);
          };

        // if (isEditorUrl(location.hash) || location.hash === '#/editor') {
        //     if (!body.hasClass('folded')) {
        //         body.addClass('folded');
        //     }
        // } else {
        //     if (body.hasClass('folded')) {
        //         body.removeClass('folded');
        //     }
        // }
    }


    function menuFix() {

        let menuRoot = $('#toplevel_page_labelbaker');
        let currentUrl = window.location.href;
        let currentPath = currentUrl.substr(currentUrl.indexOf('admin.php'));

        menuRoot.on('click', 'a', function () {
            
            var self = $(this);

            $('ul.wp-submenu li', menuRoot).removeClass('current');

            if (self.hasClass('wp-has-submenu')) {
                $('li.wp-first-item', menuRoot).addClass('current');
            } else {
                self.parents('li').addClass('current');
            }
        });

        $('ul.wp-submenu a', menuRoot).each(function (index, el) {
            if ($(el).attr('href') === currentPath) {
                $(el).parent().addClass('current');
                return;
            }
        });
    }

});
