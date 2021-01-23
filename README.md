<div id="readme" class="Box-body readme blob js-code-block-container p-5 p-xl-6 gist-border-0">
   <article class="markdown-body entry-content container-lg" itemprop="text">
      <h1>
         <a id="user-content--angular" class="anchor" aria-hidden="true" href="#intern--angular">
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
   </article>
</div>
