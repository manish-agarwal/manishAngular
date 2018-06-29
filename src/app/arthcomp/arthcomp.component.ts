import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arthcomp',
  templateUrl: './arthcomp.component.html',
  styleUrls: ['./arthcomp.component.css']
})
export class ArthcompComponent implements OnInit {

  num1:number=0;
	num2:number=0;
	numadd:number;
	numsub:number;
	nummul:number;
	numdiv:number;
	numfact:number;
	numeo:string;
  twoarg=true;
  onearg=true;

  constructor() {  }

  ngOnInit() {
  }

  activateButton()
  {
    if(this.num1!=0 && this.num2!=0)
    {
      this.twoarg=false;
      this.onearg=true;
    }
    else if(this.num1!=0 && this.num2==0)
    {
      this.onearg=false;
      this.twoarg=true;
    }
    else
    {
      this.twoarg=true;
      this.onearg=true;
    }
  }

  add()
	{
		this.numadd=this.num1+this.num2;
		return this.numadd;
	}

	sub()
	{
		this.numsub=this.num1-this.num2;
		return this.numsub;
	}

	mul()
	{
		this.nummul=this.num1*this.num2;
		return this.nummul;
	}

	div()
	{
		this.numdiv=this.num1/this.num2;
		return this.numdiv;
	}

	fact()
	{
		this.numfact=1;
		for(let i=2;i<=this.num1;i++)
		{
			this.numfact=this.numfact*i;
		}
	}

	evenOdd()
	{
		if(this.num1 % 2 == 0)
		{
			this.numeo="Even";
		}
		else
		{
			this.numeo="Odd";
		}
	}
}
