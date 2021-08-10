"use strict";
import { useEffect, useState } from "react";
import Head from "next/head";

function Header() {
	return (
	  <header className="bg-gray-800 w-screen">
		<div className="text-center text-white p-4">
			<span style={{fontFamily : "'Inter', sans-serif", fontVariant : "slashed-zero"}}>Numer0̸n</span>
		</div>
	  </header>
	);
}

function setnumber(){
	var AnswerNumber = [];
	while(AnswerNumber.length < 3){
		let n = Math.floor(Math.random() * 10);
		let same = false;
		for (let j = 0; j < AnswerNumber.length; j++) {
			if(AnswerNumber[j] === n){
				same = true;
			}
		}
		//console.log(AnswerNumber);
		if(!same){
			AnswerNumber.push(n);
		}
	}
	//console.log(AnswerNumber);
	return AnswerNumber;
}

function History(){
	//const [numbers, setNumbers] = useState(null);
}

function Clear(){
	return(
		<div className='h-screen w-screen bg-gray-100 bg-opacity-80'>
			<p className='h-screen text-red-500 text-8xl flex justify-center items-center'>Clear!</p>
		</div>
	);
}

function CheckNumber(props){
	//console.log(props.submit);
	//console.log(props.answer);
	let eat = 0;
	let bite = 0;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if(props.submit[i] == props.answer[j]){
				if(i == j){eat++;}
				else {bite++;}
				continue;
			}
		}
	}
	console.log('eat',eat,'bite',bite);
	return (
		<div className='flex flex-col items-center'>
			<div className='text-xl '>
				Answer Count : {props.count}
			</div>
			<div className='flex rounded gap-4 border-green-500 border-4 p-4'>
				<div>
					<div className='font-bold text-3xl'>
						EAT
					</div>
					<div className='font-bold text-2xl'>
						{eat}
					</div>
				</div>
				<div>
					<div className='font-bold text-3xl'>
						BITE
					</div>
					<div className='font-bold text-2xl'>
						{bite}
					</div>
				</div>
			</div>
		</div>

	);
}

function InputArea(props){
	
	//console.log(props.submitNumber);
	function handleSubmit(event){
		event.preventDefault();
		const number = event.target.elements;
		if(number.first.value === number.second.value ||
			number.first.value === number.third.value ||
			number.second.value === number.third.value){
			window.alert("Don't use same number");
		}else{
			props.submit([number.first.value, number.second.value, number.third.value]);
			props.check(props.submitCount + 1);
		}
		//console.log(props.Answer);
		//setNumbers(submitNumber);
	}
	return(
		<div>
			<form className='flex flex-col items-center align-center' onSubmit={handleSubmit}>
				<div className='ring rounded md:text-5xl text-3xl '>
					<select name='first' defaultValue='0'>
						<option value='0'>0</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
						<option value='8'>8</option>
						<option value='9'>9</option>
					</select>
					<select name='second' defaultValue='0'>
						<option value='0'>0</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
						<option value='8'>8</option>
						<option value='9'>9</option>
					</select>
					<select name='third' defaultValue='0'>
						<option value='0'>0</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
						<option value='8'>8</option>
						<option value='9'>9</option>
					</select>
				</div>
				<div className='p-3'>
					<button type='submit' className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
						Check
					</button>
				</div>
			</form>
		</div>
	);
}

export default function Home() {
	const [submitCount, check] = useState(0);
	const [submitNumber, submit] = useState([]);
	const [AnswerNumber] = useState(setnumber);
	console.log(AnswerNumber);
  return (
    <div className='h-screen flex flex-col'>
      <Head>
        <title>Numeron</title>
      </Head>
		<Header />
      <main className="flex flex-col flex-1 text-center font-reggae">
		  <div className='pt-5'>Input Your Answer</div>
		  <div className='pt-1'><InputArea submit={submit} submitNumber={submitNumber}
		  check={check} submitCount={submitCount} /></div>
		  {
				submitCount > 0 &&
				<div><CheckNumber submit={submitNumber} answer={AnswerNumber} count={submitCount} /></div>
			}
			{
				submitCount > 0 && submitNumber?.every((x,i) => parseInt(x,10) === AnswerNumber[i] ) &&
				<div className='absolute z-50'><Clear /></div>
			}
	  </main>
	  <footer className="w-full flex justify-center items-center h-12 border-t">
          <p className="">
              CopyRight © 2021, husky All Right Reserved.
          </p>
        </footer>
    </div>
  );
}
