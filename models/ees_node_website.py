# -*- coding: utf-8 -*-
# © 2017 Hideki Yamamoto
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

	
import subprocess
from odoo import api, fields, models
from datetime import datetime

class ees_node_website_config(models.Model):
	_inherit = ['ees_odoo_node.config']
	@api.depends('nodejs_folder')
	def install_website_prerequisites(self):
		for record in self:
			fld=record.nodejs_folder			
			subprocess.Popen([fld+'npm.cmd', 'i','express','serve-static','--save','--prefix',fld])

class ees_node_website_page(models.Model):
	_name='ees_node_website.page'
	name=fields.Char('Title')
	desc=fields.Text('Description')
	active = fields.Boolean('Active', default=True)
	url=fields.Char('url')
	use_cover=fields.Boolean("Cover")
	cover_image=fields.Char("Cover image")
	cover_video=fields.Char("Cover video")
	use_header=fields.Boolean("Use Site Header", default=True)
	use_footer=fields.Boolean("Use Site Footer", default=True)
	content=fields.Text('html')
	
class ees_node_website_site(models.Model):
	_name='ees_node_website.site'
	name=fields.Char('Name')
	desc=fields.Text('Description')
	active = fields.Boolean('Active', default=True)
	binding=fields.Text('Bindings')
	static_folder=fields.Text('Static Folder')
	defaultpage=fields.Many2one('ees_node_website.page',string="Default page")	
	common_head=fields.Text('head html')
	common_header=fields.Text('header html')
	common_footer=fields.Text('footer html')
	
class ees_node_website_page_rels(models.Model):
	_inherit=['ees_node_website.page']
	site=fields.Many2one('ees_node_website.site',string="Website",default=1)
	