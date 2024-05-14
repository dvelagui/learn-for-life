interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Daniel', // Site author
	title: 'Blog Aprender para toda la vida', // Site title.
	description:
		'¡Únete al Club Mentes Maestras y descubre un espacio dedicado al crecimiento personal y profesional! En nuestro canal, recibirás diariamente cápsulas de conocimiento, consejos prácticos y reflexiones inspiradoras para potenciar tu productividad, estimular tu creatividad y alcanzar tus metas. Conecta con una comunidad de mentes afines, comparte experiencias y aprende junto a nosotros. ¡Sé parte de un movimiento de desarrollo y éxito en el Club Mentes Maestras!', // Description to display in the meta tags
	lang: 'es-CO',
	ogLocale: 'es_CO',
	shareMessage: 'Compartir', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
