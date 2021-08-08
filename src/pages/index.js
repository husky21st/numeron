import { useEffect, useState } from "react";
import Head from "next/head";

function Header() {
	return (
	  <header className="bg-gray-800 w-screen h-14">
		<div className="text-center">
		  <div className="text-white p-3">
		  	<span style={{fontFeatureSettings : "'zero'  1", fontFamily : "sans-serif"}}>Numer0n</span>
		  </div>
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
	console.log(AnswerNumber);
	return AnswerNumber;
}

function History(){
	//const [numbers, setNumbers] = useState(null);
}

function Clear(){
	return(
		<p className='text-red-500 text-8xl'>Clear!</p>
	);
}

function CheckNumber(props){
	console.log(props.submit);
	console.log(props.answer);
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
	);
}

function InputArea(props){
	
	console.log(props.submitNumber);
	function handleSubmit(event){
		event.preventDefault();
		const number = event.target.elements;
		props.submit([number.first.value, number.second.value, number.third.value]);
		console.log(props.Answer);
		//setNumbers(submitNumber);
	}
	return(
		<div>
			<form className='align-center' onSubmit={handleSubmit}>
				<div className='ring rounded text-5xl'>
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
	const [submitNumber, submit] = useState(undefined);
	const [AnswerNumber] = useState(setnumber);
	console.log(submitNumber);
  return (
    <div>
      <Head>
        <title>Numeron</title>
      </Head>
		<Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
		  <div className='pt-3'>Input Your Answer</div>
		  <div className='pt-1'><InputArea submit={submit} submitNumber={submitNumber} /></div>
		  <div>{
				submitNumber &&
				<CheckNumber submit={submitNumber} answer={AnswerNumber} />
			}</div>
			{
				submitNumber?.every((x,i) => parseInt(x,10) === AnswerNumber[i] ) &&
				<div><Clear /></div>
			}
	  </main>
    </div>
  );
}
