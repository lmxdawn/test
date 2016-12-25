
/**
 * 加载更多扩展
 */
;
(function ($) {

    $.extend({
        /**
         * 加载更多扩展
         * 调用方法： var timerArr = $.loadmore.show();显示
         *          $.loadmore.hide(timerArr);隐藏
         */
        loadmore: {
            /**
             * 显示加载更多
             * @param IdNmae    需要显示的标签
             * @param html 正在加载时显示的文字
             * @param oldHtml 加载完成显示的文字
             * @returns {[*,*]}
             */
            show: function (IdNmae, html, oldHtml) {
                var step = 0, $this = $(IdNmae), newHtml = html, oldHtml = oldHtml;
                var timer = setInterval(function () {
                    step++;
                    if (step == 4) {
                        step = 1
                    }
                    ;
                    if (step == 1) {
                        $this.html(newHtml + '.')
                    }
                    ;
                    if (step == 2) {
                        $this.html(newHtml + '..')
                    }
                    ;
                    if (step == 3) {
                        $this.html(newHtml + '...')
                    }
                    ;
                }, 500);

                return [timer, $this, oldHtml];
            },

            /**
             * 隐藏加载更多
             * @param timerArr[0], timer标记
             * @param timerArr[1], 初始的html文本内容
             * @param timerArr[2], 显示的标签
             */
            hide: function (timerArr) {
                if (timerArr) {
                    clearInterval(timerArr[0]);
                    var $this = timerArr[1];
                    $this.html(timerArr[2]);
                }
                ;
            }
        }
    });
})(jQuery);