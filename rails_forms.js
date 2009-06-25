/*
 * This file is part of Milx.
 *
 * Milx is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Milx is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Milx.  If not, see <http://www.gnu.org/licenses/lgpl-3.0.txt>.
 */
/**
 * @author Connecta Sistemas
 * @version 0.1
 */
(function($) {
	$.fn.updateForm = function(action)
	{
		this.each(function() {
			var $form = $(this);
			$form.attr('action', action);
			$form.find('input:hidden[name=_method]').remove();
			$('<input type="hidden" name="_method" value="put" />').appendTo($form);
		});
	}
	$.fn.createForm = function(action)
	{
		this.each(function() {
			var $form = $(this);
			$form.attr('action', action);
			$form.find('input:hidden[name=_method]').remove();
		});
	}
	$.deleteResource = function (url, cb)
	{
		$.post(url, {'_method': 'delete'}, cb);
	}
})(jQuery);
