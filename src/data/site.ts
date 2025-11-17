export const navLinks = [
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Experience", href: "#experience" },
	{ name: "Technical", href: "#technical" },
	{ name: "Contact", href: "#contact" },
]

export const languages = [
	{ code: "es", label: "Español", flag: "🇪🇸" },
	{ code: "en", label: "English", flag: "🇺🇸" },
]

export const siteConfig = {
	name: "Gabriel Blanco",
	title: "Blagabo · Blockchain & Backend",
	tagline: "Blockchain & Backend developer crafting secure digital tools.",
	heroLocation: "España",
	heroDescription:
		"Backend and blockchain developer focused on web3 utilities, clean APIs, and practical automation. Actualmente profundizo en React y smart contracts mientras creo side projects útiles.",
	profileImage: "/images/gblanco.webp",
	resume: {
		en: "/files/CV_Gabriel_Blanco_Noce.pdf",
		es: "/files/CV_Gabriel_Blanco_Noce.pdf",
	},
	contactEmail: "gabrielblanconoce5@gmail.com",
	linkedin: "https://www.linkedin.com/in/blagabo",
	github: "https://github.com/Blagabo",
	social: [
		{
			icon: "fa6-brands:linkedin-in",
			url: "https://www.linkedin.com/in/blagabo",
			label: "LinkedIn",
		},
		{ icon: "fa6-brands:github", url: "https://github.com/Blagabo", label: "GitHub" },
	],
	collabTags: ["Blockchain dApps", "Backend APIs", "Freelance", "Open Source"],
	heroGreeting: "Hola, soy",
	heroCTA: { contact: "Escríbeme", resume: "Descargar CV" },
	pexels: {
		queries: ["blockchain", "developer desk", "code", "venezuela"],
	},
	formspree: "https://formspree.io/f/mwkgyjvz",
}

export const aboutContent = {
	intro:
		"Desarrollador blockchain y backend de Venezuela que disfruta crear herramientas accesibles, educativas y con impacto real.",
	quickFacts: [
		{
			title: "Especialidad",
			icon: "fa6-solid:cubes",
			value: "Smart contracts, Node.js APIs y utilidades web enfocadas en seguridad.",
		},
		{
			title: "Proyectos",
			icon: "fa6-solid:rocket",
			value: ["Password Generator", "QR Generator", "Recursos para la comunidad"],
		},
		{
			title: "Aprendizaje",
			icon: "fa6-solid:graduation-cap",
			value: "Perfeccionando React, Solidity y automatizaciones con scripts.",
		},
		{
			title: "Idiomas",
			icon: "fa6-solid:language",
			value: ["Español (nativo)", "Inglés (profesional)"],
		},
	],
	modal: {
		study:
			"Formación autodidacta en desarrollo web, backend y criptografía aplicada con fuerte base en JavaScript y TypeScript.",
		passionTitle: "Crear productos útiles y confiables",
		passionText:
			"Documentar, compartir y enseñar hace que cada proyecto tenga mayor impacto dentro de la comunidad latina.",
		mix: "Combino arquitecturas sencillas con pruebas constantes, integraciones API y despliegues cloud livianos.",
		personal:
			"Fan del ecosistema open source, la música urbana y las comunidades que impulsan el talento latinoamericano.",
	},
}

export const skillsContent = {
	intro: "Me gusta mezclar curiosidad blockchain con disciplina backend orientada a resultados.",
	domains: [
		{
			title: "Blockchain Development",
			icon: "simple-icons:solidity",
			description: "Contratos inteligentes, wallets y experiencias Web3 enfocadas en la gente.",
		},
		{
			title: "Backend & APIs",
			icon: "fa6-solid:server",
			description: "Node.js, Express, testing con Mocha y despliegues Dockerizados.",
		},
		{
			title: "Frontend Utilities",
			icon: "fa6-solid:wand-magic-sparkles",
			description: "Interfaces ligeras con Astro, React y Tailwind que acompañan cada herramienta.",
		},
	],
	technical: [
		"Solidity",
		"JavaScript",
		"TypeScript",
		"Node.js",
		"React",
		"Tailwind CSS",
		"MongoDB",
		"MySQL",
		"MariaDB",
		"Docker",
		"Linux",
		"Mocha",
		"Python",
		"C#",
	],
}

export const experienceContent = {
	intro: "Proyectos propios y colaboraciones que muestran mi enfoque blockchain + backend.",
	positions: [
		{
			company: "Freelance · Blagabo",
			role: "Blockchain & Backend Developer",
			period: "2021 — Presente",
			location: "Remoto · España",
			industry: "Web3 / Backend",
			companyUrl: "https://github.com/Blagabo",
			description:
				"Diseño utilidades con contratos inteligentes, APIs Node.js y frontends ligeros para enseñar y resolver problemas reales.",
			highlights: [
				"Password Generator y QR Generator con interfaces accesibles y despliegues serverless.",
				"Exploración constante de React, Astro y Tailwind para mejorar UX.",
				"Implementación de pipelines sencillos de pruebas y despliegue con Git y Docker.",
			],
		},
		{
			company: "Comunidades & Autoaprendizaje",
			role: "Backend / Blockchain Trainee",
			period: "2019 — 2021",
			location: "España",
			industry: "Educación continua",
			description:
				"Participación activa en retos personales, bootcamps y tutoriales para crear bases sólidas en desarrollo web.",
			highlights: [
				"Construcción de APIs REST con Node.js, Express y bases de datos relacionales.",
				"Automatizaciones en Python y C# para entender estructuras de datos y testing.",
				"Apoyo a otros desarrolladores latinoamericanos compartiendo aprendizajes.",
			],
		},
	],
}

export const technicalContent = {
	intro: "Toolkit centrado en blockchain, backend y frontends ligeros.",
	groups: [
		{
			title: "Blockchain & Smart Contracts",
			skills: [
				{ name: "Ethereum", icon: "simple-icons:ethereum" },
				{ name: "Solidity", icon: "simple-icons:solidity" },
				{ name: "Hardhat", icon: "fa6-solid:helmet-safety" },
				{ name: "Web3.js", icon: "simple-icons:web3dotjs" },
			],
		},
		{
			title: "Backend & Databases",
			skills: [
				{ name: "Node.js", icon: "simple-icons:nodedotjs" },
				{ name: "Express", icon: "simple-icons:express" },
				{ name: "MongoDB", icon: "simple-icons:mongodb" },
				{ name: "MySQL", icon: "simple-icons:mysql" },
			],
		},
		{
			title: "Frontend & Tooling",
			skills: [
				{ name: "React", icon: "simple-icons:react" },
				{ name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
				{ name: "Astro", icon: "simple-icons:astro" },
				{ name: "Vite", icon: "simple-icons:vite" },
			],
		},
	],
}

export const contactContent = {
	intro:
		"Disponible para colaborar en productos blockchain, backend APIs, tutorías y proyectos freelance.",
	locations: ["Madrid", "Remoto"],
}
