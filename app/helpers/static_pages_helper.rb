module StaticPagesHelper
	def full_title(page_title = '')
		base_title = "The Capital Cities Quiz"
		if page_title.empty?
			base_title
		else
			page_title + " | " + base_title
		end
	end
end
