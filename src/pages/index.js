"use strict";
import { useEffect, useState } from "react";
import Head from "next/head";

function Header() {
	return (
		<div>
		  <div className='absolute font-reggae'><HowToPlay /></div>
		<div className="text-center text-white p-4">	
			<span className='font-reggae'>Numer0̸n</span>
		</div>
		</div>
	);
}

function Guide(props) {
	function addClass(event) {
		console.log('event',event.target);
	}
	return(
		<div className='z-50'>
			<div className='h-screen w-screen bg-gray-100 bg-opacity-80 px-4'>
				<button onClick={props.hide} type="button" className="mt-4 mr-4 absolute top-0 right-0 bg-blue-300 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 hover:ring-blue-300 hover:ring-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            	  <span className="sr-only">Close menu</span>
            	  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            	    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            	  </svg>
            	</button>
			<div className='flex flex-col h-screen justify-center items-center'>
				<div className='flex flex-col flex-1 justify-center items-center py-5'>
					<div className='text-5xl'>遊び方</div>
					<ul className='text-xl py-5'>
					 <li className='flex flex-col flex-1 justify-center items-center py-3'>3ケタの数字を当てるゲームです</li>
					 <li className='flex flex-col flex-1 justify-center items-center py-3'>数字の重複はありません</li>
					 <li className='flex flex-col flex-1 justify-center items-center py-3'>　回答した数字のうち，数字と桁が合っている場合はEAT，<br></br>
						 　数字は合っているが桁の位置が違う場合はBITEとして表示されます
					 </li>
					 <li className='flex flex-col flex-1 justify-center items-center py-3'>　最終的に3EAT，つまり全ての数字と桁の場所が合わさったらクリアです
					 </li>
					</ul>
					</div>
			</div>
			</div>
		</div>
	);
}

function HowToPlay() {
	const [guide, changeGuide] = useState(false);
	//const { isOpen, onToggle } = useDisclosure();
	console.log('1',guide);
	function showGuide(event){
		event.preventDefault();
		changeGuide(true);
	}
	function hideGuide(event){
		event.preventDefault();
		changeGuide(false);
		console.log('event',event.target);
	}
	return(
		<div>
			<div className='absolute z-20 text-xs whitespace-nowrap'>
				<div className='ml-3 mt-3'>
				<button onClick={showGuide} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-3xl inline-flex items-center">
					<span className="material-icons">sports_esports</span>
					<span>How To Play</span>
				</button>
				</div>

			</div>
			{
				guide&&<div className='flex flex-col justify-center items-center'>
					<div className="z-50">
						<Guide hide={hideGuide} />
					</div>
				</div>
			}
		</div>
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

function History(props){
	return(
		<div>
			<div className='flex flex-col items-center pt-5'>
				{
					props.number.map((n) =>
					{
						return(
						<div key={props.number.indexOf(n)} className='flex rounded border-4 p-4'>
							<span className='self-center md:text-3xl text-xl'>#{props.number.length - props.number.indexOf(n)}</span>
							<span className='self-center pt-2 px-3'>number is</span>
							<span className='self-center md:text-3xl text-xl'>{n[0]}{n[1]}{n[2]}:</span>
							<span className='self-center md:text-3xl text-xl px-2'>{n[3]}</span>
							<span className='self-center pt-1 text-xl'>eat</span>
							<span className='self-center md:text-3xl text-xl px-2'>{n[4]}</span>
							<span className='self-center pt-1 text-xl'>bite</span>
						</div>
						);
					})
				}

			</div>
		</div>
	)
}

function Clear(props){
	function handleRestart(event){
		event.preventDefault();
		props.restart(setnumber);
		props.submit([]);
		props.check(0);
	}
	return(
		<div className='h-screen w-screen bg-gray-100 bg-opacity-80 fadein'>
			<div className='flex flex-col h-screen justify-center items-center'>
				<p className=' text-red-500 text-8xl'>Clear!</p>
				<div className='p-8'>
					<button onClick={handleRestart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl py-3 px-6 rounded-full">Restart</button>
				</div>
			</div>
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
			if(props.submit[0][i] == props.answer[j]){
				if(i == j){eat++;}
				else {bite++;}
				continue;
			}
		}
	}
	let baff = props.submit;
	baff[0].push(eat,bite);
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
	const [init, change] = useState(false);
	useEffect(() => {
		change(true);
	},[props.ans]);
	function choice() {
		change(false);
	}
	function handleSubmit(event){
		event.preventDefault();
		const number = event.target.elements;
		if(number.first.value === number.second.value ||
			number.first.value === number.third.value ||
			number.second.value === number.third.value){
			window.alert("Don't use same number");
		}else{
			let baff = props.submitNumber;
			baff.unshift([number.first.value, number.second.value, number.third.value])
			console.log('1',baff);
			props.submit(baff);
			props.check(props.submitCount + 1);
		}
		//console.log(props.Answer);
		//setNumbers(submitNumber);
	}
	const options = [0,1,2,3,4,5,6,7,8,9];
	console.log(init);
	return(
		<div>
			<form className='flex flex-col items-center align-center' onSubmit={handleSubmit}>
				<div className='ring rounded md:text-5xl text-3xl '>
				{
					init?(
						<div>
						<select name='first' value='0' onChange={choice}>
						{options.map((o) => <option key={o} value={o}>{o}</option>)}
						</select>
						<select name='second' value='0' onChange={choice}>
						{options.map((o) => <option key={o} value={o}>{o}</option>)}
						</select>
						<select name='third' value='0' onChange={choice}>
						{options.map((o) => <option key={o} value={o}>{o}</option>)}
						</select>
						</div>
					) : (
						<div>
						<select name='first'>
						{options.map((o) => <option key={o} value={o}>{o}</option>)}
						</select>
						<select name='second'>
						{options.map((o) => <option key={o} value={o}>{o}</option>)}
						</select>
						<select name='third'>
						{options.map((o) => <option key={o} value={o}>{o}</option>)}
						</select>
						</div>
					)
				}
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
	const [AnswerNumber, restart] = useState(setnumber);
	console.log('submit', submitNumber);
  return (
    <div className='h-screen flex flex-col'>
      <Head>
        <title>Numeron</title>
		<link
            href="https://fonts.googleapis.com/css2?family=Reggae+One&display=swap"
            rel="stylesheet"
          ></link>
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      		rel="stylesheet"></link>
      </Head>
	  <header className="bg-gray-800 w-screen">
	  	<Header />
		  {
				submitCount > 0 && submitNumber[0]?.every((x,i) => parseInt(x,10) === AnswerNumber[i] ) &&
				<div className='absolute z-30 ' ><Clear check={check} submit={submit} restart={restart} /></div>
			}
	  </header>
      <main className="flex flex-col flex-1 text-center font-reggae ">
		  <div className='pt-5'>Input Your Answer</div>
		  <div className='pt-1'><InputArea submit={submit} submitNumber={submitNumber}
		  check={check} submitCount={submitCount} ans={AnswerNumber}/></div>
		  {
				submitCount > 0 &&
				<div><CheckNumber submit={submitNumber} answer={AnswerNumber} count={submitCount} /></div>
			}

			{
				submitCount > 0 &&
				<div><History number={submitNumber} /></div>
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
