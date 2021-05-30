/**
 * Class qui gère les notifications.
 */
export class NoticeHelper {
    /**
     * Créer une notification de type simple.
     * @param {string} text : le texte à afficher.
     * @param {string} type : warning, info, error ou success.
     */
    static write_notice(message: string, messageType: string) {
        noty({
            text   : message,
            type   : messageType,
            layout : 'bottomCenter',
            theme  : 'relax',
            maxVisible: 5,
            closeWith : ['click','button','backdrop'],
            animation : {
                open   : 'animated zoomIn',
                close  : 'animated zoomOut',
                easing : 'swing',
                speed  : 500,
            },
            timeout: 5000
        });
    }

}
