class CalcController {

    constructor(){
			this._locale = 'pt-BR';
			this._displayCalcEl = document.querySelector("#display");
			this._dateEl = document.querySelector("#data");
			this._timeEl = document.querySelector("#hora");
			this._currentDate;
			this.initalize();
			this.initButtonEvents();
    }    

		initalize(){
			setInterval(()=>{
				this.setDisplayDateTime();
			}, 1000)
		}

		initButtonEvents(){
			let buttons = document.querySelectorAll("#buttons > g, #parts > g");

			buttons.forEach((btn, index)=>{
				btn.addEventListener('click',e=>{
					console.log(btn.className.baseVal.replace("btn-",""));
				})
			})
		}

		setDisplayDateTime(){
			this.displayDate = this.currentDate.toLocaleDateString(this._locale)
			this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
		}

		get displayTime(){
			return this._timeEl.innerHTML;
		}

		set displayTime(value){
			return this._timeEl.innerHTML = value;
		}

		get displayDate(){
			return this._dateEl.innerHTML;
		}

		set displayDate(value){
			return this._dateEl.innerHTML = value;
		}

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value){
			this._displayCalcEl.innerHTML = value;
    }
    get currentDate(){
        return new Date();
    }
    set currentDate(valor){
        this._currentDate = valor;
    }
}