class GoodsteinEngine {

    /**
     * @param int number
     *
     */
    constructor(number = 0)
    {
        this.$wrapper = document.getElementById('wrapper');
        this.number = parseInt(number);

        this.base = 2;

        this.first();
    }

    first()
    {
        let n = this.number;

        let $div, p, e =  null;

        do {
            e = n.toExp(this.base);
            n -= Math.pow(this.base, e);

            // render
            $div = document.createElement('div');
            $div.classList.add('eq');
            $div.innerHTML = this.base + '<sup>' + e + '</sup>';
            this.$wrapper.appendChild($div);
        }
        while(n > 0);
    }
}

/**
 * @param int x
 *
 * @return int
 */
Number.prototype.toExp = function(x) { return Math.round(Math.log(this) / Math.log(x)); };

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('form').addEventListener('submit', event => {

        event.preventDefault();
        event.stopPropagation();

        let $input = event.target.querySelector('input[name="number"]');

        let number = $input.value;

        let result = new GoodsteinEngine(number);

        $input.value = result;

        return false;
    });

});