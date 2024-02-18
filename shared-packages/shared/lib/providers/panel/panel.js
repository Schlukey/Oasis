import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useState, useContext } from 'react';
import { Drawer, DrawerContent, DrawerOverlay, DrawerHeader, DrawerBody, DrawerCloseButton, } from '@chakra-ui/react';
var PanelContext = createContext(Promise.reject);
export var usePanel = function () {
    var panelContext = useContext(PanelContext);
    return panelContext;
};
export var AppPanel = function (_a) {
    var title = _a.title, _b = _a.size, size = _b === void 0 ? 'md' : _b, render = _a.render, onSubmit = _a.onSubmit;
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var onClose = function () { return setIsOpen(false); };
    var onOpen = function () { return setIsOpen(true); };
    var value = function (options) {
        return new Promise(function (resolve) {
            if (options.open) {
                setIsOpen(true);
            }
            else {
                setIsOpen(false);
            }
            resolve();
        });
    };
    return (_jsx(PanelContext.Provider, { value: value, children: _jsxs(Drawer, { isOpen: isOpen, placement: 'right', onClose: onClose, size: size, children: [_jsx(DrawerOverlay, { w: 'full' }), _jsxs(DrawerContent, { h: '100%', children: [_jsx(DrawerCloseButton, { zIndex: 5, color: 'white' }), _jsx(DrawerHeader, { borderBottomWidth: '1px', children: title }), _jsx(DrawerBody, { p: 4, children: render && render(onSubmit, onClose) })] })] }) }));
};
//# sourceMappingURL=panel.js.map