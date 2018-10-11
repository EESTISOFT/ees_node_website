# -*- coding: utf-8 -*-
# © 2017 Hideki Yamamoto
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

	
import subprocess
import json
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
	javascript=fields.Text('script')
	
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
	
class ees_node_website_simplex(models.Model):
	_name='ees_node_website.simplex'
	name=fields.Char('Name')
	substitution=fields.Char('Substitution')
	value=fields.Char('Value')
	page=fields.Many2one('ees_node_website.page',string="Page")	
	@api.onchange('value','substitution')
	def _replot_json(self):
		for S in self:
			if S.page:
				R=S.page
				jstring='{"items":['
				if R.simplex:
					for s in R.simplex:
						if s.substitution:
							if s.value:
								jstring=jstring+'['+json.dumps(s.substitution)+','+json.dumps(s.value)+'],'
				jstring=(jstring+']}')
				R.simplexjson=jstring
				
	
class ees_node_website_gallery_image(models.Model):
	_name="ees_node_website.gallery_image"
	image=fields.Binary('Image', attachment=True)
	gallery=fields.Many2one('ees_node_website.gallery', 'Gallery', copy=True)

class ees_node_website_gallery(models.Model):	
	_name='ees_node_website.gallery'
	name=fields.Char('Name')
	active = fields.Boolean('Active', default=True)
	site=fields.Many2one('ees_node_website.site',string="Website",default=1)
	desc=fields.Text('Description')
	images=fields.One2many('ees_node_website.gallery_image', 'gallery', string="Images")
	#isg_site=fields.Many2one('isg.website_config',string="Website",default=1)

class ees_node_website_slideshow(models.Model):
	_name="ees_node_website.slideshow"
	name=fields.Char('Name')
	active = fields.Boolean('Active', default=True)
	site=fields.Many2one('ees_node_website.site',string="Website",default=1)
	desc=fields.Text('Description')

class ees_node_website_fragment(models.Model):
	_name="ees_node_website.fragment"
	name=fields.Char('Name')
	active = fields.Boolean('Active', default=True)
	site=fields.Many2one('ees_node_website.site',string="Website",default=1)
	slideshow=fields.Many2one('ees_node_website.slideshow',string="Slide Show")
	desc=fields.Text('Description')
	content=fields.Text('Content')

class ees_node_website_slideshow_rels(models.Model):
	_inherit=['ees_node_website.slideshow']
	slides=fields.One2many('ees_node_website.fragment', 'slideshow', string="Slides")
	
	
	
class ees_node_website_blog_article(models.Model):
	_inherit=['blog.post']
	image=fields.Binary('Image', attachment=True)
	seo_name=fields.Char('Seo name')
	summary=fields.Text('Summary')
	is_event=fields.Boolean('Is Event')
	date_string=fields.Char('Testo data')
	
	@api.onchange('name')
	def _auto_seo_name(self):
		seoname=self.name
		seoname=seoname.lower()
		seoname=seoname.strip()
		seoname=seoname.replace(' ','-')
		seoname=seoname.replace('à','a')
		seoname=seoname.replace('è','e')
		seoname=seoname.replace('é','e')
		seoname=seoname.replace('ì','i')
		seoname=seoname.replace('ò','o')
		seoname=seoname.replace('ù','u')
		seoname=seoname.replace('\'','')
		seoname=seoname.replace('/','-')
		seoname=seoname.replace('+','-')
		seoname=seoname.replace('°','')
		seoname=seoname.replace('#','')
		self.seo_name=seoname
			

class ees_node_website_page_image(models.Model):
	name='ees_node_website.page_image'
	image=fields.Binary('Image', attachment=True)
	selector=fields.Char('Selector')
	
	
class ees_node_website_page_rels(models.Model):
	_inherit=['ees_node_website.page']
	site=fields.Many2one('ees_node_website.site',string="Website",default=1)
	simplex=fields.One2many('ees_node_website.simplex', 'page', string="Substitutions")
	simplexjson=fields.Text(compute='_get_simplexjson',store="true")
	
	
	@api.depends('simplex')
	@api.onchange('simplex')
	def _get_simplexjson(self):
		for R in self:
			jstring='{"items":['
			if R.simplex:
				#simplexjson=json.dumps(R.simplex)
				for s in R.simplex:
					if s.substitution:
						if s.value:
							jstring=jstring+'['+json.dumps(s.substitution)+','+json.dumps(s.value)+'],'
			jstring=(jstring+']}')
			R.simplexjson=jstring
	
	
#class isg_website_config(models.Model):
##	_name='isg.website_config'
#	text1=fields.Char("Testo UpLeft")
#	text2=fields.Char("Testo UpRight")
#	text3=fields.Char("Testo DownRight")
#	text4=fields.Char("Testo DownLeft")
#	text_aboutus=fields.Text("About us")
#	cover_image=fields.Binary('Image', attachment=True)

#class ees_node_website_gallery(models.Model):
#	_inherit=['ees_node_website.gallery']

#class ees_node_website_config_rels(models.Model):
#	_inherit='isg.website_config'
#	galleries=fields.One2many('ees_node_website.gallery', 'isg_site', string="Images")
	
	
