{
    'name': 'EESTISOFT nodejs website',
    'version': '11.0.4.8',
    'author': 'Hideki Yamamoto',
    'category': 'Productivity',
    'website': 'https://eestisoft.com',
    'sequence': 2,
    'summary': 'Adds backadmin views, and tweaks to native website module',
    'description': """
Adds backadmin views, and tweaks to native website module
	
Made with love.
    """,
    'depends': ['calendar','utm','website','website_blog','ees_odoo_node'],
    'data': ['views/ees_node_website.xml','ir.model.access.csv'],
    'installable': True,
    'application': True,
    'auto_install': False
}
