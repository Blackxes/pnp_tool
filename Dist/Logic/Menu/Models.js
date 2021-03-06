/**
 * @File contains menu models
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmx.de
 */
export var MenuConfigModel = /** @class */ (function () {
    function MenuConfigModel() {
        /**
         * identifier of this menu config
         *
         * @var string
         */
        this.key = '';
        /**
         * menu item configurations
         *
         * @var array
         */
        this.items = [];
    }
    return MenuConfigModel;
}());
/**
 * model for a menu configuration item
 */
export var MenuItemConfigModel = /** @class */ (function () {
    function MenuItemConfigModel() {
        /**
         * identifier of this item
         *
         * @var string
         */
        this.key = '';
        /**
         * the group this item belongs to
         *
         * @var string
         */
        this.group = '';
        /**
         * defines the order of this item within the
         *
         * @var int
         */
        this.order = 9999;
    }
    return MenuItemConfigModel;
}());
/**
 * menu item group to group menu items.. yeah
 */
export var MenuGroupModel = /** @class */ (function () {
    function MenuGroupModel() {
        /**
         * group title
         *
         * @var string
         */
        this.title = '';
        /**
         * group key
         */
        this.key = '';
    }
    return MenuGroupModel;
}());
/**
 * model for a menu item
 */
export var MenuItemModel = /** @class */ (function () {
    function MenuItemModel() {
        /**
         * menu item label
         *
         * @var string
         */
        this.title = '';
        /**
         * target url
         *
         * @var string
         */
        this.route = '';
        /**
         * menu context key
         * eg. "main_menu" or "side_menu" or
         * "super_extremely_specified_menu_because_i_like_complicated_stuff"
         *
         * @var string
         */
        this.key = '';
        /**
         * icon object from @fortawesome icons
         * use @fortAwesome/[x]-[x]-svg-icons predefined
         * objects to define this value
         *
         * @var object
         */
        this.icon = null;
        /**
         * defines whether the icon should be rendered
         * nice to mix it with renderTitle
         *
         * @var bool
         */
        this.renderIcon = true;
        /**
         * defines whether the title should be rendered
         * nice to mix it with renderIcon
         *
         * @var bool
         */
        this.renderTitle = true;
        /**
         * defines whether the icon for the arrows before the label should be hidden
         *
         * @var bool
         */
        this.renderPrefixArrow = true;
        /**
         * defines whether this items icon should be used when the current route path
         * matches this menu items route
         *
         * @var bool
         */
        this.showInHeader = true;
        /**
         * defines whether this route should match exactly the route
         * and ignore that this route is in the path of the current route
         * important for "active" for example
         *
         * @var bool
         */
        this.exact = true;
    }
    return MenuItemModel;
}());
