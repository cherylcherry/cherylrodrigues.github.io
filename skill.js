$(function () {
            $('.chart').easyPieChart({
                easing: 'easeOutBounce',
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                },
                barColor: '#05D6AC', //FORCOLOR OF CHART
                lineWidth: 10, //WIDTH OF STRIP OF SKILL CHART
                size: 200, //WIDTH - HEIGHT OF SKILL CHART(SHOULD BE IN SQUARE) -  SHOUL BE EQUAL - Like 200px 
            });

        });