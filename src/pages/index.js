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
							<span className='text-3xl'>#{props.number.length - props.number.indexOf(n)}</span>
							<span className='pt-2 px-5'>number is</span>
							<span className='text-3xl'>{n[0]}{n[1]}{n[2]} : </span>
							<span className='text-3xl px-2'>{n[3]}</span>
							<span className='pt-1 text-xl'>eat</span>
							<span className='text-3xl px-2'>{n[4]}</span>
							<span className='pt-1 text-xl'>bite</span>
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
		<div className='h-screen w-screen bg-gray-100 bg-opacity-80 fade'>
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
      </Head>
		<Header />
      <main className="flex flex-col flex-1 text-center font-reggae ">
		  <div className='pt-5'>Input Your Answer</div>
		  <div className='pt-1'><InputArea submit={submit} submitNumber={submitNumber}
		  check={check} submitCount={submitCount} ans={AnswerNumber}/></div>
		  {
				submitCount > 0 &&
				<div><CheckNumber submit={submitNumber} answer={AnswerNumber} count={submitCount} /></div>
			}
			{
				submitCount > 0 && submitNumber[0]?.every((x,i) => parseInt(x,10) === AnswerNumber[i] ) &&
				<div className='absolute z-50 ' ><Clear check={check} submit={submit} restart={restart} /></div>
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
