/**
 * @file
 * Popup window handler for share UI.
 */

(function ($, Drupal, window) {

  Drupal.behaviors.bangpoundShareLinks = {
    attach: function (context, settings) {
      $('a.popup', context).click(function (event) {
        var width = settings.bangpoundShareLinks.popupWidth,
          height = settings.bangpoundShareLinks.popupHeight,
          offsetLeft = Math.round((window.screen.width / 2) - (width / 2)),
          offsetTop = 0;

        if (window.screen.height > height) {
          offsetTop = Math.round((window.screen.height / 2) - (height / 2));
        }

        window.open(this.href, 'popup', 'left='+offsetLeft+',top='+offsetTop+',width='+width+',height='+height+',personalbar=0,toolbar=0,scrollbars=1,resizable=1');
        event.preventDefault();
      });
    }
  };

})(jQuery, Drupal, this);
