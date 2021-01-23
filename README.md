<div id="readme" class="Box-body readme blob js-code-block-container p-5 p-xl-6 gist-border-0">
   <article class="markdown-body entry-content container-lg" itemprop="text">
      <h1>
         <a id="user-content-intern--angular" class="anchor" aria-hidden="true" href="#intern--angular">
            <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
               <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
            </svg>
         </a>
         Cocktail Shop
      </h1>
      <p>This is a test project to demonstrate using Intern with Angular 4+. It contains <a href="https://angular.io/generated/live-examples/testing/app-specs.eplnkr.html" rel="nofollow">all of the specs</a> from Angular's test guide as well as <a href="https://angular.io/generated/live-examples/testing/bag-specs.eplnkr.html" rel="nofollow">some extras</a>. Specs have been reformatted and converted to using Intern best practices as outlined below.</p>
      <h2>
         <a id="user-content-get-started" class="anchor" aria-hidden="true" href="#get-started">
            <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
               <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
            </svg>
         </a>
         Get started
      </h2>
      <h3>
         <a id="user-content-clone-the-repo" class="anchor" aria-hidden="true" href="#clone-the-repo">
            <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
               <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
            </svg>
         </a>
         Clone the repo
      </h3>
      <div class="highlight highlight-source-shell">
         <pre>git clone https://github.com/bryanforbes/intern-angular
<span class="pl-c1">cd</span> intern-angular</pre>
      </div>
      <h3>
         <a id="user-content-install-npm-packages" class="anchor" aria-hidden="true" href="#install-npm-packages">
            <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
               <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
            </svg>
         </a>
         Install npm packages
      </h3>
      <p>Install the <code>npm</code> packages described in the <code>package.json</code> and verify that it works:</p>
      <div class="highlight highlight-source-shell">
         <pre>npm install
npm start</pre>
      </div>
      <p>The <code>npm start</code> command builds (compiles TypeScript and copies assets) the application into <code>dist/</code>, watches for changes to the source files, and runs <code>lite-server</code> on port <code>3000</code>.</p>
      <p>Shut it down manually with <code>Ctrl-C</code>.</p>
      <h4>
         <a id="user-content-npm-scripts" class="anchor" aria-hidden="true" href="#npm-scripts">
            <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
               <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
            </svg>
         </a>
         npm scripts
      </h4>
      <p>These are the most useful commands defined in <code>package.json</code>:</p>
      <ul>
         <li><code>npm start</code> - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".</li>
         <li><code>npm run build</code> - runs the TypeScript compiler and asset copier once.</li>
         <li><code>npm run build:watch</code> - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into <code>dist/</code>.</li>
         <li><code>npm run lint</code> - runs <code>tslint</code> on the project files.</li>
         <li><code>npm run serve</code> - runs <code>lite-server</code>.</li>
      </ul>
      <p>These are the test-related scripts:</p>
      <ul>
         <li><code>npm test</code> - builds the application and runs Intern tests (both unit and functional) one time.</li>
         <li><code>npm run ci</code> - cleans, lints, and builds the application and runs Intern tests (both unit and functional) one time.</li>
      </ul>
      <h2>
         <a id="user-content-techniques" class="anchor" aria-hidden="true" href="#techniques">
            <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
               <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
            </svg>
         </a>
         Techniques
      </h2>
      <p>Because Intern seamlessly handles asynchronous testing, there is no reason to use <code>async</code>, <code>fakeAsync</code>, or <code>tick</code> from <code>@angular/core/testing</code>. Furthermore, because TypeScript introduced downlevel asynchronous function support in version 2.1, the use of <code>async</code> and <code>await</code> has been leveraged to write these tests.</p>
      <h3>
         <a id="user-content-intern-bdd-interfaces" class="anchor" aria-hidden="true" href="#intern-bdd-interfaces">
            <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
               <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
            </svg>
         </a>
         Intern <code>bdd</code> interfaces
      </h3>
      <p>The first change made to all spec files was to assign the <code>describe</code>, <code>it</code>, <code>beforeEach</code>, and <code>expect</code> functions from the Intern plugins:</p>
      <div class="highlight highlight-source-ts">
         <pre><span class="pl-k">const</span> <span class="pl-kos">{</span> describe<span class="pl-kos">,</span> it<span class="pl-kos">,</span> beforeEach <span class="pl-kos">}</span> <span class="pl-c1">=</span> <span class="pl-s1">intern</span><span class="pl-kos">.</span><span class="pl-en">getPlugin</span><span class="pl-kos">(</span><span class="pl-s">'interface.bdd'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-k">const</span> <span class="pl-kos">{</span> expect <span class="pl-kos">}</span> <span class="pl-c1">=</span> <span class="pl-s1">intern</span><span class="pl-kos">.</span><span class="pl-en">getPlugin</span><span class="pl-kos">(</span><span class="pl-s">'chai'</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre>
      </div>
      <p>Most of these interfaces behave similarly to jasmine or mocha with a couple of exceptions. First, <code>before</code>, <code>after</code>, <code>beforeEach</code>, <code>afterEach</code>, and <code>it</code> can all take a function that returns a promise or is defined with <code>async</code> and Intern will wait until that promise has resolved before proceeding to the next test/lifecycle function.</p>
      <p><strong>It should be noted</strong> that Intern currently (alpha.9) does not wait for a promise to resolve if there are multiple of the same lifecycle functions in one <code>describe</code> block. For instance, this is quite common to see in Angular tests:</p>
      <div class="highlight highlight-source-ts">
         <pre><span class="pl-en">beforeEach</span><span class="pl-kos">(</span><span class="pl-en">async</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-smi">TestBed</span><span class="pl-kos">.</span><span class="pl-en">configureTestingModule</span><span class="pl-kos">(</span><span class="pl-kos">{</span>
		<span class="pl-c1">declarations</span>: <span class="pl-kos">[</span> <span class="pl-smi">DashboardHeroComponent</span> <span class="pl-kos">]</span><span class="pl-kos">,</span>
	<span class="pl-kos">}</span><span class="pl-kos">)</span>
	<span class="pl-kos">.</span><span class="pl-en">compileComponents</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

<span class="pl-en">beforeEach</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-s1">fixture</span> <span class="pl-c1">=</span> <span class="pl-smi">TestBed</span><span class="pl-kos">.</span><span class="pl-en">createComponent</span><span class="pl-kos">(</span><span class="pl-smi">DashboardHeroComponent</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-s1">comp</span>    <span class="pl-c1">=</span> <span class="pl-s1">fixture</span><span class="pl-kos">.</span><span class="pl-c1">componentInstance</span><span class="pl-kos">;</span>
	<span class="pl-s1">heroEl</span>  <span class="pl-c1">=</span> <span class="pl-s1">fixture</span><span class="pl-kos">.</span><span class="pl-c1">debugElement</span><span class="pl-kos">.</span><span class="pl-en">query</span><span class="pl-kos">(</span><span class="pl-smi">By</span><span class="pl-kos">.</span><span class="pl-en">css</span><span class="pl-kos">(</span><span class="pl-s">'.hero'</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre>
      </div>
      <p>Using <code>async</code> and <code>await</code>, this can be easily rewritten into a single function with Intern:</p>
      <div class="highlight highlight-source-ts">
         <pre><span class="pl-en">beforeEach</span><span class="pl-kos">(</span><span class="pl-k">async</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-k">await</span> <span class="pl-smi">TestBed</span><span class="pl-kos">.</span><span class="pl-en">configureTestingModule</span><span class="pl-kos">(</span><span class="pl-kos">{</span>
		<span class="pl-c1">declarations</span>: <span class="pl-kos">[</span> <span class="pl-smi">DashboardHeroComponent</span> <span class="pl-kos">]</span><span class="pl-kos">,</span>
	<span class="pl-kos">}</span><span class="pl-kos">)</span>
	<span class="pl-kos">.</span><span class="pl-en">compileComponents</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

	<span class="pl-s1">fixture</span> <span class="pl-c1">=</span> <span class="pl-smi">TestBed</span><span class="pl-kos">.</span><span class="pl-en">createComponent</span><span class="pl-kos">(</span><span class="pl-smi">DashboardHeroComponent</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-s1">comp</span>    <span class="pl-c1">=</span> <span class="pl-s1">fixture</span><span class="pl-kos">.</span><span class="pl-c1">componentInstance</span><span class="pl-kos">;</span>
	<span class="pl-s1">heroEl</span>  <span class="pl-c1">=</span> <span class="pl-s1">fixture</span><span class="pl-kos">.</span><span class="pl-c1">debugElement</span><span class="pl-kos">.</span><span class="pl-en">query</span><span class="pl-kos">(</span><span class="pl-smi">By</span><span class="pl-kos">.</span><span class="pl-en">css</span><span class="pl-kos">(</span><span class="pl-s">'.hero'</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre>
      </div>
      <p>Since Intern comes with Chai bundled, many of the expectations had to be rewritten. Most of these were simply changing <code>.toBe()</code> to <code>.to.equal()</code> or <code>toMatch()</code> to <code>to.match()</code>.</p>
      <p>Another change was from using jasmine's <code>spyOn()</code> to Sinon.JS's <code>spy()</code> and <code>stub()</code> as well as <code>sinon-chai</code> to add expectations for stubs and spies to <code>expect()</code>.</p>
      <h3>
         <a id="user-content-asynchronous-functions" class="anchor" aria-hidden="true" href="#asynchronous-functions">
            <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
               <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
            </svg>
         </a>
         Asynchronous functions
      </h3>
      <p>Similar to the lifecycle functions, any invocation of <code>it</code> that used Angular's <code>async()</code> or <code>fakeAsync()</code> was rewritten to use an asynchronous function. For instance:</p>
      <div class="highlight highlight-source-ts">
         <pre><span class="pl-en">it</span><span class="pl-kos">(</span><span class="pl-s">'should show quote after getQuote promise (async)'</span><span class="pl-kos">,</span> <span class="pl-en">async</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-s1">fixture</span><span class="pl-kos">.</span><span class="pl-en">detectChanges</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

	<span class="pl-s1">fixture</span><span class="pl-kos">.</span><span class="pl-en">whenStable</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">then</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span> <span class="pl-c">// wait for async getQuote</span>
		<span class="pl-s1">fixture</span><span class="pl-kos">.</span><span class="pl-en">detectChanges</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>        <span class="pl-c">// update view with quote</span>
		<span class="pl-en">expect</span><span class="pl-kos">(</span><span class="pl-s1">el</span><span class="pl-kos">.</span><span class="pl-c1">textContent</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">toBe</span><span class="pl-kos">(</span><span class="pl-s1">testQuote</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

<span class="pl-en">it</span><span class="pl-kos">(</span><span class="pl-s">'should select hero on click'</span><span class="pl-kos">,</span> <span class="pl-en">fakeAsync</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-k">const</span> <span class="pl-s1">expectedHero</span> <span class="pl-c1">=</span> <span class="pl-smi">HEROES</span><span class="pl-kos">[</span><span class="pl-c1">1</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
	<span class="pl-k">const</span> <span class="pl-s1">li</span> <span class="pl-c1">=</span> <span class="pl-s1">page</span><span class="pl-kos">.</span><span class="pl-c1">heroRows</span><span class="pl-kos">[</span><span class="pl-c1">1</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
	<span class="pl-s1">li</span><span class="pl-kos">.</span><span class="pl-en">dispatchEvent</span><span class="pl-kos">(</span><span class="pl-en">newEvent</span><span class="pl-kos">(</span><span class="pl-s">'click'</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-en">tick</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-c">// `.toEqual` because selectedHero is clone of expectedHero; see FakeHeroService</span>
	<span class="pl-en">expect</span><span class="pl-kos">(</span><span class="pl-s1">comp</span><span class="pl-kos">.</span><span class="pl-c1">selectedHero</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">toEqual</span><span class="pl-kos">(</span><span class="pl-s1">expectedHero</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre>
      </div>
      <p>These can be easily rewritten to the following:</p>
      <div class="highlight highlight-source-ts">
         <pre><span class="pl-en">it</span><span class="pl-kos">(</span><span class="pl-s">'should show quote after getQuote promise'</span><span class="pl-kos">,</span> <span class="pl-k">async</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-s1">fixture</span><span class="pl-kos">.</span><span class="pl-en">detectChanges</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

	<span class="pl-k">await</span> <span class="pl-s1">fixture</span><span class="pl-kos">.</span><span class="pl-en">whenStable</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// wait for async getQuote</span>
	<span class="pl-s1">fixture</span><span class="pl-kos">.</span><span class="pl-en">detectChanges</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>    <span class="pl-c">// update view with quote</span>
	<span class="pl-en">expect</span><span class="pl-kos">(</span><span class="pl-s1">el</span><span class="pl-kos">.</span><span class="pl-c1">textContent</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">to</span><span class="pl-kos">.</span><span class="pl-en">equal</span><span class="pl-kos">(</span><span class="pl-s1">testQuote</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

<span class="pl-en">it</span><span class="pl-kos">(</span><span class="pl-s">'should select hero on click'</span><span class="pl-kos">,</span> <span class="pl-k">async</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
	<span class="pl-k">const</span> <span class="pl-s1">expectedHero</span> <span class="pl-c1">=</span> <span class="pl-smi">HEROES</span><span class="pl-kos">[</span><span class="pl-c1">1</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
	<span class="pl-k">const</span> <span class="pl-s1">li</span> <span class="pl-c1">=</span> <span class="pl-s1">page</span><span class="pl-kos">.</span><span class="pl-c1">heroRows</span><span class="pl-kos">[</span><span class="pl-c1">1</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
	<span class="pl-s1">li</span><span class="pl-kos">.</span><span class="pl-en">dispatchEvent</span><span class="pl-kos">(</span><span class="pl-en">newEvent</span><span class="pl-kos">(</span><span class="pl-s">'click'</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
	<span class="pl-k">await</span> <span class="pl-s1">comp</span><span class="pl-kos">.</span><span class="pl-c1">heroes</span><span class="pl-kos">;</span> <span class="pl-c">// the promise returned from the service</span>
	<span class="pl-en">expect</span><span class="pl-kos">(</span><span class="pl-s1">comp</span><span class="pl-kos">.</span><span class="pl-c1">selectedHero</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">to</span><span class="pl-kos">.</span><span class="pl-c1">deep</span><span class="pl-kos">.</span><span class="pl-en">equal</span><span class="pl-kos">(</span><span class="pl-s1">expectedHero</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre>
      </div>
   </article>
</div>
</div>
