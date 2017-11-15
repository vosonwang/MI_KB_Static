let util = {

};
util.title = function (title) {
    /*TODO 2. 修改title */
    title = title ? title  : 'iView project';
    window.document.title = title;
};

export default util;