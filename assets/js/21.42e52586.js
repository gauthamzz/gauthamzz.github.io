(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{195:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("This is the first things you see when you open the Tendermint website. Odds are\nyou already know what a blockchain is, It’s the technology which powers Bitcoin,\nEthereum and other decentralized coins you heard of. The basic premise is that\npeople can make applications in a decentralized way, and you can write in any\nprogramming language you prefer. Maybe you are confused so let’s back up a bit.")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Byzantine-fault tolerant state replication machine — a really large word which\nmakes no sense, unless you are good in decentralized systems. Let’s break up\nthis word.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("It’s better explained using"),a("a",{attrs:{href:"https://web.archive.org/web/20170205142845/http://lamport.azurewebsites.net/pubs/byz.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v(" the Byzantine Generals\nProblem"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("Hard parts over, now let’s look at the second part.")]),t._v(" "),a("h2",{attrs:{id:"state-machine-replication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-machine-replication","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/State_machine_replication",target:"_blank",rel:"noopener noreferrer"}},[t._v("State machine replication"),a("OutboundLink")],1)]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("With Tendermint’s state machine, we begin with a “genesis state.” This is\nanalogous to a blank slate before any transactions have happened on the network.\nWhen transactions are executed, this genesis state transitions into some final\nstate. At any point in time, this final state represents the current state of\nTendermint.")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("The programmer defines the initial state that should tolerate failures and the\nset of allowable transitions on this state, and the system ensures that every\nreplica starts in the same state, and every replica makes the same state\ntransitions in the same order. This is state machine replication.")]),t._v(" "),t._m(10),t._v(" "),a("hr"),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("Which is pretty good, considering if you wish to make an application for\nEthereum you end up learning solidity. Bare with me, it’s a bit tricky.")]),t._v(" "),t._m(14),t._v(" "),a("p",[a("a",{attrs:{href:"https://tendermint.com/docs/introduction/quick-start.html#install",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Let’s first run a pre-built application and then understand how to make it\nour-self. We will use an application called kvstore. It’s a simple application\nwhich will take a “key” and a “value” and stores it. So that later you can get\nthe value when you search for the “key”. A very simple database application.")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[a("a",{attrs:{href:"https://asciinema.org/a/ddaa7WWd3lrV7l1NP3ZYU3AD3",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://asciinema.org/a/ddaa7WWd3lrV7l1NP3ZYU3AD3.svg",alt:"asciicast"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://asciinema.org/a/U6SkGnw40EveOGgP2MX1oiGxB",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://asciinema.org/a/U6SkGnw40EveOGgP2MX1oiGxB.svg",alt:"asciicast"}}),a("OutboundLink")],1)]),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("Why don’t we do the same task in a different way, where you don’t have you type\ncurl command always. Tendermint has this tool called abci-console which allows\nyou to send requests easily to the Tendermint application.")]),t._v(" "),a("p",[t._v("ABCI is short for application blockchain interface, which connects the\napplication with the blockchain.")]),t._v(" "),a("p",[t._v("The abci-console allows people to send Transactions easily. Now let us see the\nmethods we used in abci-console to send transactions to Tendermint.")]),t._v(" "),t._m(21),a("p",[t._v("We used deliver_tx to send a transaction, this is the part where the state is\nupdated in our machine. we committed that transaction to store the transaction,\nthis is where the state increases the height of the chain stores the block.\nAfter which we query it from the Tendermint node, which is basically looking up\nthe state for the value for the given key.")]),t._v(" "),t._m(22),t._v(" "),a("br"),t._v(" "),a("p",[t._v("Let us summarize.")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),a("p",[t._v("I will be writing an application in Python, which is a very simple language I\nthink you can follow it even if you don’t understand it. "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/e6a6c6523eae02ce62e08c107dbd27f33b79a107/abci/example/python3_kvstore/kvstore.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("The full code is\nhere"),a("OutboundLink")],1),t._v("\nif you wish to see it.")]),t._v(" "),a("p",[t._v("I will be using "),a("a",{attrs:{href:"https://github.com/davebryson/py-abci",target:"_blank",rel:"noopener noreferrer"}},[t._v("the py-abci"),a("OutboundLink")],1),t._v(" module,\nwhich is a wrapper for abci in python. I am not going to reinvent the wheel.")]),t._v(" "),a("p",[t._v("We will start off by creating a state of the Tendermint node. I will add a DB\nwhich is MemoryDB, a size to define the size of the state, a height to define\nthe height of the block and an apphash for the application.")]),t._v(" "),t._m(26),t._m(27),t._v(" "),a("p",[t._v("If you remember the deliver_tx in the above example we send the key and value\npair to the Tendermint node. And this key and value are stored in the DB and\nstate is updated.")]),t._v(" "),t._m(28),a("p",[t._v("The data input is in bytes. So we split the string using ‘=’ and save the key\nand value pair. The size variable we had set will be increased.")]),t._v(" "),a("p",[t._v("Now that a transaction is delivered we need to save the state, for that we use\ncommit.")]),t._v(" "),t._m(29),t._v(" "),a("p",[t._v("During commit, we need to return an apphash, representing the change of state in\nthe chain. I am creating a big-endian notation of the size as the apphash. The\nheight of the chain is increased and we are saving the state.")]),t._v(" "),t._m(30),a("p",[t._v("Now that we have updated the state, we need to ensure that the application\nworks. So let us make a query.")]),t._v(" "),t._m(31),t._v(" "),a("p",[t._v("The query seems straight forward. You check if the value is in the DB and return\nit.")]),t._v(" "),t._m(32),a("br"),t._v(" "),t._m(33),t._v(" "),a("p",[t._v("We took care of delivering the transaction, then we made the commit and query.")]),t._v(" "),a("p",[t._v("One thing we can ensure is that if the transaction is bad, we can neglect it\nfrom entering the mempool of the blockchain. We can use check_tx method for\nthat, but that’s unnecessary for this use case.")]),t._v(" "),a("p",[t._v("Now do check out the whole code or write the rest yourself, in your favourite\nprogramming language.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/e6a6c6523eae02ce62e08c107dbd27f33b79a107/abci/example/kvstore",target:"_blank",rel:"noopener noreferrer"}},[t._v("There is another example in Go if you wish to take a\nlook."),a("OutboundLink")],1)]),t._v(" "),t._m(34),t._v(" "),a("p",[t._v("After you start the tendermint node then run your python code to run the\napplication. Then you should be able to send requests just like the kvstore\nexample above.")]),t._v(" "),t._m(35),t._v(" "),a("p",[t._v("The tendermint node runs in port 26657 and abci in 26658.")]),t._v(" "),t._m(36),t._v(" "),a("p",[t._v("…Phew! You made it to the end. I hope?")]),t._v(" "),a("p",[t._v("There’s a lot to digest in this post, I know. If it takes you multiple reads to\nfully understand what’s going on, that’s totally fine. I personally read the\nvarious parts of the codebase many times and coded the application before\ngrokking what was going on.")]),t._v(" "),a("p",[t._v("Nonetheless, I hope you found this overview helpful. If you find any errors or\nmistakes, I’d love for you to write a private note or post it directly in the\ncomments. I look at all of ’em, I promise.")]),t._v(" "),a("p",[t._v("And remember, I’m human (yep, it’s true) and I make mistakes. I took the time to\nwrite this post for the benefit of the community, for free. So please be\nconstructive in your feedback, without unnecessary bashing. 🙏")]),t._v(" "),t._m(37),t._v(" "),a("p",[t._v("[1]"),a("a",{attrs:{href:"https://www.reddit.com/r/CryptoTechnology/comments/8782mb/what_is_the_difference_between_normal_byzantine/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.reddit.com/r/CryptoTechnology/comments/8782mb/what_is_the_difference_between_normal_byzantine/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("[2]"),a("a",{attrs:{href:"https://web.archive.org/web/20170205142845/http://lamport.azurewebsites.net/pubs/byz.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://web.archive.org/web/20170205142845/http://lamport.azurewebsites.net/pubs/byz.pdf"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("[3]"),a("a",{attrs:{href:"http://hackingdistributed.com/2013/12/26/introducing-replicant/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://hackingdistributed.com/2013/12/26/introducing-replicant/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("[4] "),a("a",{attrs:{href:"https://medium.com/@preethikasireddy/how-does-ethereum-work-anyway-22d1df506369",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://medium.com/@preethikasireddy/how-does-ethereum-work-anyway-22d1df506369"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"how-to-write-tendermint-applications-using-python-🌠"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-write-tendermint-applications-using-python-🌠","aria-hidden":"true"}},[this._v("#")]),this._v(" How to write Tendermint Applications using Python 🌠")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn-images-1.medium.com/max/2560/1*phm1pnPQNE8fRcPBIw2wCw.png",alt:""}}),this._v(" "),e("span",{staticClass:"figcaption_hack"},[this._v("source tendermint.com")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Byzantine-fault tolerant state machine replication. Or blockchain, for short.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"byzantine-fault-tolerant"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#byzantine-fault-tolerant","aria-hidden":"true"}},[this._v("#")]),this._v(" Byzantine-fault tolerant")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*VeOnqynnx5o_fkOrG29aKQ.jpeg",alt:""}}),this._v(" "),e("span",{staticClass:"figcaption_hack"},[this._v("Need to remove traitor generals.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("This situation can be expressed abstractly in terms of a group of generals of\nthe Byzantine army camped with their troops around an enemy city. Communicating\nonly by messenger, the generals must "),e("strong",[this._v("agree upon a common battle plan")]),this._v(".\nHowever, one or more of them may be traitors who will try to confuse the others.\nThe problem is to find an algorithm to ensure that the loyal generals will reach\nagreement. It is shown that, using only oral messages, this problem is solvable\nif and only if "),e("strong",[this._v("more than two-thirds")]),this._v(" of the generals are loyal; so a single\ntraitor can confound two loyal generals. With unforgeable written messages, the\nproblem is solvable for any number of generals and possible traitors.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A system is said to be BFT if it can continue to operate even if certain\nparticipants drop out or are adversarial. With respect to consensus algorithms,\nByzantine fault tolerance normally means the algorithm is guaranteed to\nconverge, or capable of reaching consensus, even if there are adversarial nodes\nor if nodes drop from the network, etc. In this sense, BFT is a property of a\nconsensus algorithm rather than an algorithm itself."),e("br"),this._v(" The idea is that for a\nsystem of parties who are decentralized all over the world, for them to have a\ncommon agreement or consensus among each other. And for this, there is a need\nfor 2/3rd’s of the people, to be honest.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In computer science, a "),e("em",[this._v("state machine")]),this._v(" refers to something that will read a\nseries of inputs and, based on those inputs, will transition to a new state.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*hJ8eDA-YXM62paxFfvNK_A.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*u2bo41-QYZwctRaJR7uEUA.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("Or we can just call it a blockchain")]),this._v(". Now let’s get into the details of things.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"writing-applications-using-tendermint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-applications-using-tendermint","aria-hidden":"true"}},[this._v("#")]),this._v(" Writing Applications using Tendermint")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Tendermint can replicate deterministic state machines written in any programming\nlanguage.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*dkhrybKc6E-EZi-KrUS8yA.png",alt:""}}),this._v(" "),e("span",{staticClass:"figcaption_hack"},[this._v("TSMP is called ABCI now")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"start-off-by-installing-tendermint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-off-by-installing-tendermint","aria-hidden":"true"}},[this._v("#")]),this._v(" Start off by installing Tendermint")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*lxMQB2bMlK8QYFTqcdlytw.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"running-pre-built-kvstore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-pre-built-kvstore","aria-hidden":"true"}},[this._v("#")]),this._v(" Running pre-built kvstore")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The Tendermint team has already build kvstore example into the application. "),e("br"),this._v("\nBetter you type these parts as we go, that’s why I didn’t type the output.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# Create the genesis block, for the node.\ntendermint init\n\n# Now that the gensis block is inilaised we can start \n# the application on the system \ntendermint node --proxy_app=kvstore\n\n# This will start the kvstore application in your\n# computer in port 26657.\n# Lets test the kv store application by sending a request to the application\ncurl -s 'localhost:26657/broadcast_tx_commit?tx=\"gautham=awesome\"'\n\n# You will get a JSON file if its successful\n\n# Now you can check if it actually worked\ncurl -s 'localhost:26657/abci_query?data=\"gautham\"'\n\n# Now this will give you an output 'awesome' or YXdlc29tZQ== which \n# is awesome in base 64. \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("br"),this._v(" Let’s breakdown the process we started an application using the command\n‘tendermint node’. The tendermint application runs on port 26657 on your local\nmachine. Go to that port to see the application running smoothly. You have so\nmany methods which you can use.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"kvstore-using-abci-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kvstore-using-abci-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" KVStore using abci-cli")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('# Lets do in a different way \ntendermint init --home ".node"\n\n# Start a tendermint node \ntendermint node --home ".node"\n\n# Open a new terminal and start kvstore from abci-console\nabci-console kvstore\n\n# Open new terminal and start abci-console\nabci-cli console\nI[2019-01-31|22:16:34.170] Starting socketClient                        module=abci-client impl=socketClient\n> deliver_tx "gautham=awesome"\n-> code: OK\n> commit\n-> code: OK\n-> data.hex: 0x0400000000000000\n> query "gautham"\n-> code: OK\n-> log: exists\n-> height: 0\n-> key: gautham\n-> key.hex: 6761757468616D\n-> value: awesome\n-> value.hex: 617765736F6D65\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*6fTKb38pjlhOkUg50rbLtg.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("You deliver a transaction, then you commit the transaction and then you can\nquery the transaction.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Now, let us look at how to make the KV Store application as you want. "),e("br"),this._v(" If\nyou notice I used the home flag, It’s to make sure the genesis token is in the\nfolder named node.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"let’s-code-our-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#let’s-code-our-application","aria-hidden":"true"}},[this._v("#")]),this._v(" Let’s code our application")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("State")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" apphash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" size\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" height\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apphash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" apphash\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"deliver-tx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deliver-tx","aria-hidden":"true"}},[this._v("#")]),this._v(" Deliver_tx")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deliver_tx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Validate the transaction before mutating the state.\n      Args:\n          raw_tx: a raw string (in bytes) transaction.\n      """')]),t._v("\n      parts "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'='")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tx\n      self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ResponseDeliverTx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("CodeTypeOk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit","aria-hidden":"true"}},[this._v("#")]),this._v(" Commit")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      byte_length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ceil"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bit_length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      app_hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("byte_length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" byteorder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'big'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app_hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app_hash\n      self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ResponseCommit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("app_hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"query"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query","aria-hidden":"true"}},[this._v("#")]),this._v(" Query")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ResponseQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("CodeTypeOk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("That’s it")]),this._v(". HURRRRRRAAAAAAAAAAAAYYYYYYYY.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*irtYZac2qbxaWGmJ43xqSQ.jpeg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"conclusion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[this._v("#")]),this._v(" Conclusion")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"resources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[this._v("#")]),this._v(" Resources")])}],!1,null,null,null);e.default=s.exports}}]);