<?php

namespace LabelBaker;

class Menu
{
    use BaseTrait;
    private $parent_slug = 'labelbaker';
    public function init()
    {
        // Register admin menu page
        add_action('admin_menu', [$this, 'register_labelbaker_menu_page']);
    }

    public function register_labelbaker_menu_page()
    {

        $parent_slug = $this->parent_slug;

        add_menu_page(
            __('LabelBaker', 'labelbaker'),
            __('LabelBaker', 'labelbaker'),
            'labelbaker_user',
            $parent_slug,
            [$this, 'admin_page'],
            'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+DQo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPHRpdGxlPmNpcmNsZS1kb3QtZmlsbGVkPC90aXRsZT4NCiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9ImRyb3AiIGZpbGw9IiMwMDAwMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyLjY2NjY2NywgNDIuNjY2NjY3KSI+DQogICAgICAgICAgICA8cGF0aCBkPSJNMjEzLjMzMzMzMywzLjU1MjcxMzY4ZS0xNCBDMzMxLjE1NDA4LDMuNTUyNzEzNjhlLTE0IDQyNi42NjY2NjcsOTUuNTEyNTg2NyA0MjYuNjY2NjY3LDIxMy4zMzMzMzMgQzQyNi42NjY2NjcsMzMxLjE1NDA4IDMzMS4xNTQwOCw0MjYuNjY2NjY3IDIxMy4zMzMzMzMsNDI2LjY2NjY2NyBDOTUuNTEyNTg2Nyw0MjYuNjY2NjY3IDMuNTUyNzEzNjhlLTE0LDMzMS4xNTQwOCAzLjU1MjcxMzY4ZS0xNCwyMTMuMzMzMzMzIEMzLjU1MjcxMzY4ZS0xNCw5NS41MTI1ODY3IDk1LjUxMjU4NjcsMy41NTI3MTM2OGUtMTQgMjEzLjMzMzMzMywzLjU1MjcxMzY4ZS0xNCBaIE0yMTMuMzMzMzMzLDEwNi42NjY2NjcgQzE1NC40MjI5NiwxMDYuNjY2NjY3IDEwNi42NjY2NjcsMTU0LjQyMjk2IDEwNi42NjY2NjcsMjEzLjMzMzMzMyBDMTA2LjY2NjY2NywyNzIuMjQzNzA3IDE1NC40MjI5NiwzMjAgMjEzLjMzMzMzMywzMjAgQzI3Mi4yNDM3MDcsMzIwIDMyMCwyNzIuMjQzNzA3IDMyMCwyMTMuMzMzMzMzIEMzMjAsMTU0LjQyMjk2IDI3Mi4yNDM3MDcsMTA2LjY2NjY2NyAyMTMuMzMzMzMzLDEwNi42NjY2NjcgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj4NCg0KPC9wYXRoPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+',
            6
        );
    }

    // Callback function for admin menu page
    public function admin_page()
    {
        if (!current_user_can('labelbaker_user')) {
            return;
        }
?>
        <div data-config="Zt370X2XrApeCDxHw3nVcD2kb8h7RzpPXI+xagFD7/EzS5evRTYZoXgnm2KLmPg7MGd4A+KOCeNiKYhQd8oQwVXgsEH0SvIk2Oxvyjt6W6bBRPxiqUZwjFlYNcG48ApqUi2924ZHCfXEdD0Q6s1cUlX/51KKyMtMaW7x6tYXBKxBm6kgVLK1hHxRJiV4WyEAMW9O0quYDVMO1A9QaG16SZKUDa1yVn0vlV1L42HtVBMt2P0HtLbB9Dj7uKbxp8QRG0jtZsRp/dej29Dw5LVdV19CNmBX++wlmMrvqu2Ah2uc1ppfItOO7mUkFcazBxq6UF6+T2JF9qW/H172LYCvyJUUhydXiN5eM8VEaOc0o//Er/SprYhIsHMyXqwNyHT2pqYUgBk6yHoo5+b9QVGPswKCIeqDvlsHDGFDqJmco9cCRveP0CcK8gZrGlv2ZvS0yTjU3oIkL3TWO7rjNH7S5ssWMrXamTCqikOp22gIf7M=" id="label-baker"></div>
<?php
    }
}
