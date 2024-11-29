import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
    useEffect(() => {
        const text = document.querySelector('.animated-text');
        const letters = text.textContent.split('');
        text.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('');

        gsap.fromTo(
            '.animated-text span',
            { color: 'black' }, 
            {
                color: 'blue yellow',   
                duration: 0.5,    
                stagger: 0.1,     
                repeat: -1,
                delay: 5,              
            },
        );
    }, []);
    useEffect(() => {
        const text = document.querySelector('.animated-text1');
        const letters = text.textContent.split('');
        text.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('');
        gsap.fromTo(
            '.animated-text1',
            { color: 'black' },  
            {
                color: 'red',  
                duration: 6,     
                stagger: 0.1,      
                repeat: -1,
                yoyo: true, 
            },
        );
        ScrollTrigger.create({
            trigger: '.animated-text1', 
            start: 'top top',            
            end: '+=-10',                
            pin: true,              
            pinSpacing: false,          
        });
    }, []);
    useEffect(() => {
        gsap.fromTo(
            '.animated-text',
            {
                x: '100%',        
                opacity: 0, 
            },
            {
                x: 0,         
                opacity: 1,    
                duration: 6,     
                ease: 'power3.out',
                repeat: 0,       
            }
        );
    }, []);
    
  return (
      <div className='py-12'><p className='text-5xl text-black font-medium text-center animated-text1'>TextAnimation</p>
              <p className='text-4xl text-black max-w-[650px] text-center mx-auto pt-5 animated-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
      </div>
  )
}

export default TextAnimation