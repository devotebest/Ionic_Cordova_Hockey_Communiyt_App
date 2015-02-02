this["precompiled_templates"] = this["precompiled_templates"] || {};

this["precompiled_templates"]["boxscores_show"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "				<div class=\"form-group\">\n					<div class=\"btn-group btn-group-justified\" id=\"boxscore_tabs_container\">\n						<div class=\"btn-group\">\n							<button type=\"button\" data-tab=\"scoring\" class=\"btn btn-default js-boxscore-summary-tab btn-primary\" id=\"scoring_summary_btn\">\n								<div class=\"button_text\">\n									Scoring\n								</div>\n							</button>\n						</div>\n						<div class=\"btn-group\">\n							<button type=\"button\" data-tab=\"penalties\" class=\"btn btn-default js-boxscore-summary-tab\" id=\"penalties_summary_btn\">\n								<div class=\"button_text\">\n									Penalties\n								</div>\n							</button>\n						</div>\n					</div>\n				</div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.scoring_summary, '					', 'scoring_summary', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "					<article class=\"card\">\n						<div class=\"title\">\n							<h2>Stats haven't been uploaded</h2>\n						</div>\n						<section class=\"about\">\n							<div class=\"profile_pic\">\n								<img class=\"touch\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n							</div>\n							<div class=\"user_info\">\n								<div class=\"name\">\n									"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n								</div>\n								<div class=\"timeago\">\n									"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.location : stack1), depth0))
    + "\n								</div>\n							</div>\n						</section>\n						<div class=\"main\">\n							<div class=\"comment_content\">\n								<p>We haven't finalized the stats for this game yet. Please check back soon.</p>\n							</div>\n						</div>\n					</article>\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "				<div id=\"penalties_summary_content\" class=\"hide\">\n";
  stack1 = this.invokePartial(partials.penalty_summary, '					', 'penalty_summary', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div id=\"boxscore_summary\" class=\"inner-page inner-page-current\">\n	<div id=\"boxscore_summary_scroller\" class=\"main_scrolling container\">\n		<div id=\"boxscore_summary_content\">\n";
  stack1 = this.invokePartial(partials.box_score_header, '			', 'box_score_header', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n	</div>\n</div>\n\n<div id=\"boxscore_scores\" class=\"inner-page\">\n	<div id=\"boxscore_scores_scroller\" class=\"main_scrolling\">\n		<div class=\"container cards_container\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.has_penalties : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			<div id=\"scoring_summary_content\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.finalized : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.has_penalties : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n	</div>\n</div>\n\n<div id=\"boxscore_roster\" class=\"inner-page\">\n	<div id=\"boxscore_roster_scroller\" class=\"main_scrolling\">\n		<div id=\"boxscore_roster_content\" class=\"container cards_container\">\n\n			<div class=\"container\">\n				<div class=\"form-group\">\n					<div class=\"btn-group btn-group-justified\" id=\"boxscore_tabs_container\">\n						<div class=\"btn-group\">\n							<button type=\"button\" data-tab=\"home\" class=\"btn btn-default js-boxscore-roster-tab btn-primary\" id='home_team_btn'>\n								<div class=\"button_text\">\n									"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.home_team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n								</div>\n							</button>\n						</div>\n						<div class=\"btn-group\">\n							<button type=\"button\" data-tab=\"away\" class=\"btn btn-default js-boxscore-roster-tab\" id=\"away_team_btn\">\n								<div class=\"button_text\">\n									"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.away_team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n								</div>\n							</button>\n						</div>\n					</div>\n				</div>\n			</div>\n\n			<div id=\"home_innerpage_content\">\n";
  stack1 = this.invokePartial(partials.box_score_stats_column, '				', 'box_score_stats_column', (depth0 != null ? depth0.home_roster : depth0), undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</div>\n			<div class=\"hide\" id=\"away_innerpage_content\">\n";
  stack1 = this.invokePartial(partials.box_score_stats_column, '				', 'box_score_stats_column', (depth0 != null ? depth0.away_roster : depth0), undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</div>\n		</div>\n	</div>\n</div>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["card_actions"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "liked";
  },"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "status.liked", {"name":"t","hash":{},"data":data})))
    + "\n";
},"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "status.like", {"name":"t","hash":{},"data":data})))
    + "\n";
},"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n	--><button type=\"button\" class=\"status_comment_action_button btn btn-action\">\n		<i class=\"icon-single-comment\"></i><span>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "comment", {"name":"t","hash":{},"data":data})))
    + "</span>\n	</button><!--";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<section class=\"actions\">\n	<button type=\"button\" class=\"like ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.liked : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " btn btn-action\">\n		<i class=\"icon-thumbs-up2\"></i><span>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.liked : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</span>\n	</button><!--";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.actions : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	--><button type=\"button\" class=\"js-share-button share btn btn-action\" data-link=\""
    + escapeExpression(((helper = (helper = helpers.full_link || (depth0 != null ? depth0.full_link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"full_link","hash":{},"data":data}) : helper)))
    + "\">\n		<i class=\"icon-share\"></i><span>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "share", {"name":"t","hash":{},"data":data})))
    + "</span>\n	</button>\n</section>";
},"useData":true});



this["precompiled_templates"]["cards_album_page"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	  		vs <a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.vs_team : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.vs_team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.vs_team : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.cards_status, '					', 'cards_status', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"card inset\">\n\n	<section class=\"title\">\n		<h3>Album: "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n		\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.team : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	 	\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.vs_team : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</section>\n\n	<section>\n		<div class=\"col-sm-6\">\n";
  stack1 = ((helpers.columnize || (depth0 && depth0.columnize) || helperMissing).call(depth0, (depth0 != null ? depth0.photos : depth0), 2, 1, {"name":"columnize","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n\n		<div class=\"col-sm-6\">\n";
  stack1 = ((helpers.columnize || (depth0 && depth0.columnize) || helperMissing).call(depth0, (depth0 != null ? depth0.photos : depth0), 2, 2, {"name":"columnize","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n	</section>\n	\n</div>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["cards_box_score_goal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = "		<div id=\"bsgp_page_"
    + escapeExpression(((helpers.add || (depth0 && depth0.add) || helperMissing).call(depth0, (data && data.index), 1, {"name":"add","hash":{},"data":data})))
    + "\" class=\"border_box box_score_goal_page pt-page window_height\">\n				<!-- Message -->\n				<div class=\"bsgp_split_screen window_height floatl border_box\">\n					\n					<!-- Progress Steps -->\n					<div class=\"box_score_goal_progress_container animateAllFive\">\n						<div class=\"bsgpc_name\"></div>\n						<div id=\"bsgp_page_"
    + escapeExpression(((helpers.add || (depth0 && depth0.add) || helperMissing).call(depth0, (data && data.index), 1, {"name":"add","hash":{},"data":data})))
    + "_content\" class=\"bsgpc_content\"></div>\n						<div id=\"bsgp_page_"
    + escapeExpression(((helpers.add || (depth0 && depth0.add) || helperMissing).call(depth0, (data && data.index), 1, {"name":"add","hash":{},"data":data})))
    + "_time\" class=\"bsgpc_time\"></div>\n					</div>\n					\n					<!-- Question -->\n					<div class=\"bsgp_message\">";
  stack1 = ((helper = (helper = helpers.message_text || (depth0 != null ? depth0.message_text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message_text","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n					\n					<!-- Cancel / Skip / Done -->\n					<div class=\"bsgp_cta_container\">\n";
  stack1 = ((helpers.is || (depth0 && depth0.is) || helperMissing).call(depth0, (depth0 != null ? depth0.cta : depth0), "done", {"name":"is","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "					</div>\n				</div>\n				\n				<div class=\"bsgp_split_screen window_height floatr border_box\">\n					\n					<!-- Player Selection -->	\n";
  stack1 = ((helpers.is || (depth0 && depth0.is) || helperMissing).call(depth0, (depth0 != null ? depth0.scroller : depth0), "players", {"name":"is","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "				\n					<!-- Time selection -->\n";
  stack1 = ((helpers.is || (depth0 && depth0.is) || helperMissing).call(depth0, (depth0 != null ? depth0.scroller : depth0), "time", {"name":"is","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "				\n					<!-- Game or penalty type -->\n";
  stack1 = ((helpers.is || (depth0 && depth0.is) || helperMissing).call(depth0, (depth0 != null ? depth0.scroller : depth0), "extra", {"name":"is","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</div>\n		</div>\n";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "							<div class=\"bsgp_cta bsgp_done\" data-index=\""
    + escapeExpression(((helpers.add || (depth0 && depth0.add) || helperMissing).call(depth0, (data && data.index), 1, {"name":"add","hash":{},"data":data})))
    + "\">\n								done\n							</div>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "							<div class=\"bs_goal_overlay_cancel bsgp_cancel floatl\">\n								cancel\n							</div>\n";
  stack1 = ((helpers.is || (depth0 && depth0.is) || helperMissing).call(depth0, (depth0 != null ? depth0.cta : depth0), "skip", {"name":"is","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.is || (depth0 && depth0.is) || helperMissing).call(depth0, (depth0 != null ? depth0.cta : depth0), "next", {"name":"is","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  return "								<div class=\"bsgp_skip floatr\">\n									skip\n								</div>\n";
  },"7":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return "								<div class=\"bsgp_next floatr\" id=\"bgsp_next_"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" data-index=\""
    + escapeExpression(((helpers.add || (depth0 && depth0.add) || helperMissing).call(depth0, (data && data.index), 1, {"name":"add","hash":{},"data":data})))
    + "\">\n									next\n								</div>\n";
},"9":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return "						<div class=\"bsgp_players_scroller_wrapper\"><div class=\"bsgp_players_scroller\" data-next-page=\"bsgp_page_"
    + escapeExpression(((helpers.add || (depth0 && depth0.add) || helperMissing).call(depth0, (data && data.index), 2, {"name":"add","hash":{},"data":data})))
    + "\" data-stat-type=\""
    + escapeExpression(((helper = (helper = helpers.stat_type || (depth0 != null ? depth0.stat_type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"stat_type","hash":{},"data":data}) : helper)))
    + "\" data-stat-key=\""
    + escapeExpression(((helper = (helper = helpers.stat_key || (depth0 != null ? depth0.stat_key : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"stat_key","hash":{},"data":data}) : helper)))
    + "\"></div></div>\n						<div class=\"bsgp_scroller_upper_fade\"></div>\n						<div class=\"bsgp_scroller_lower_fade\"></div>\n";
},"11":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "						<div class=\"bsgp_time_wrapper\">\n							<div id=\"bsgp_time_"
    + escapeExpression(((helpers.add || (depth0 && depth0.add) || helperMissing).call(depth0, (data && data.index), 1, {"name":"add","hash":{},"data":data})))
    + "\" class=\"bsgp_time_scroller\"></div>\n							<div class=\"bsgp_min\">Min</div>\n							<div class=\"bsgp_sec\">Sec</div>\n							<div class=\"bsgp_period\">Period</div>\n						</div>\n";
},"13":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "						<div id=\"bsgp_extra_"
    + escapeExpression(((helpers.add || (depth0 && depth0.add) || helperMissing).call(depth0, (data && data.index), 1, {"name":"add","hash":{},"data":data})))
    + "\" class=\"bsgp_extra_scroller\"></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"box_score_game_page_container\">\n	\n	<!-- Goal vs Penalty -->\n	<div id=\"bsgp_page_0\" class=\"box_score_goal_page border_box pt-page pt-page-current window_height\">\n			<div id=\"bsgp_team_name\"></div>\n			<div id=\"bsgp_circles_wrapper\">\n				<div id=\"bsgp_goal\" class=\"box_score_circle floatl\" data-next-page=\"bsgp_page_1\" data-stat-key=\"goal\" data-time-div=\"bsgp_time_4\" data-extra-div=\"bsgp_extra_5\"></div>\n				<div class=\"box_score_circle floatr\" data-next-page=\"bsgp_page_6\" data-stat-key=\"penalty\" data-time-div=\"bsgp_time_8\" data-extra-div=\"bsgp_extra_7\"></div>\n				<div class=\"clear\"></div>\n			</div>\n			<div class=\"clear\"></div>\n			<div class=\"bs_goal_overlay_cancel\">cancel</div>\n	</div>\n	\n	<!-- Remaining Pages -->\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});



this["precompiled_templates"]["cards_box_score_players"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	<div class=\"bsgp_players_container bsgp_players_"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" data-user-id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" data-index=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" data-number=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.number : stack1), depth0))
    + "\">\n		<div class=\"bsgp_players_number inline_block\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.number : stack1), depth0))
    + "</div>\n		<div class=\"trct_picture_wrapper inline_block\">\n			<div class=\"trct_picture\" style=\"background:url("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + ") no-repeat;\"></div>\n		</div>\n		<div class=\"bsgp_players_name inline_block\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "</div>\n	</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});



this["precompiled_templates"]["cards_box_score_progress"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"bsgpc_progress_wrapper\">\n	<div class=\"bsgpc_type\">"
    + escapeExpression(((helper = (helper = helpers.stat_type || (depth0 != null ? depth0.stat_type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"stat_type","hash":{},"data":data}) : helper)))
    + "</div>\n	<div class=\"bsgpc_number\">"
    + escapeExpression(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"number","hash":{},"data":data}) : helper)))
    + "</div>\n</div>";
},"useData":true});



this["precompiled_templates"]["cards_box_score_result"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "	<div class=\"l1_table third border_box\">\n		<!-- Suspension -->\n		<div class=\"teams_table_wrapper\">\n			<table id=\"tsc_box_score_table\" class=\"tablesorter\"> \n				<thead>\n					<tr> \n					    <th colspan=\"2\">\n							<a href='/box_scores/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + ", "
    + escapeExpression(((helper = (helper = helpers.time_start || (depth0 != null ? depth0.time_start : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"time_start","hash":{},"data":data}) : helper)))
    + "</a>\n						</th>\n						<th><a href='/box_scores/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "boxscore.final", {"name":"t","hash":{},"data":data})))
    + "</a></th>\n		 			</tr> \n				</thead> \n				<tbody id=\"tsc_upcoming_table_body\"> \n					<tr class=\"";
  stack1 = ((helpers.isnt || (depth0 && depth0.isnt) || helperMissing).call(depth0, (depth0 != null ? depth0.tie_game : depth0), true, {"name":"isnt","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n						<td>\n							<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.home_team : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.home_team : depth0)) != null ? stack1.name : stack1), depth0))
    + " | Hockey team\"><img src='"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.home_team : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "' width='35' height='35' class='circle_radius'></a>\n						</td>\n						<td>\n				\n							<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.home_team : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.home_team : depth0)) != null ? stack1.name : stack1), depth0))
    + " | Hockey team\">\n								"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.home_team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n							</a>\n							\n						</td>\n						<td>\n							"
    + escapeExpression(((helper = (helper = helpers.home_score || (depth0 != null ? depth0.home_score : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"home_score","hash":{},"data":data}) : helper)))
    + "\n						</td>\n					</tr>\n					<tr class=\"";
  stack1 = ((helpers.isnt || (depth0 && depth0.isnt) || helperMissing).call(depth0, (depth0 != null ? depth0.tie_game : depth0), true, {"name":"isnt","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n						<td>\n							<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.away_team : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.away_team : depth0)) != null ? stack1.name : stack1), depth0))
    + " | Hockey team\"><img src='"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.away_team : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "' width='35' height='35' class='circle_radius'></a>\n						</td>\n						<td>\n				\n							<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.away_team : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.away_team : depth0)) != null ? stack1.name : stack1), depth0))
    + " | Hockey team\">\n								"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.away_team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n							</a>\n							\n						</td>\n						<td>\n							"
    + escapeExpression(((helper = (helper = helpers.away_score || (depth0 != null ? depth0.away_score : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"away_score","hash":{},"data":data}) : helper)))
    + "\n						</td>\n					</tr>\n				</tbody> \n			</table>\n		</div>\n	</div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.isnt || (depth0 && depth0.isnt) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.home_team : depth0)) != null ? stack1.id : stack1), (depth0 != null ? depth0.winner_id : depth0), {"name":"isnt","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"3":function(depth0,helpers,partials,data) {
  return "loser";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.isnt || (depth0 && depth0.isnt) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.away_team : depth0)) != null ? stack1.id : stack1), (depth0 != null ? depth0.winner_id : depth0), {"name":"isnt","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.box_scores : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});



this["precompiled_templates"]["cards_boxscore"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " future";
  },"3":function(depth0,helpers,partials,data) {
  return " past";
  },"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" mobile-href=\""
    + escapeExpression(((helper = (helper = helpers.mobile_link || (depth0 != null ? depth0.mobile_link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"mobile_link","hash":{},"data":data}) : helper)))
    + "\" ";
},"7":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.boxscore : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.boxscore : depth0)) != null ? stack1.mobile_link : stack1), depth0))
    + "\" ";
},"9":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "\n";
  stack1 = ((helpers.is || (depth0 && depth0.is) || helperMissing).call(depth0, (depth0 != null ? depth0.winner_id : depth0), (depth0 != null ? depth0.team_id : depth0), {"name":"is","hash":{},"fn":this.program(10, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.is || (depth0 && depth0.is) || helperMissing).call(depth0, (depth0 != null ? depth0.loser_id : depth0), (depth0 != null ? depth0.team_id : depth0), {"name":"is","hash":{},"fn":this.program(12, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.tie_game : depth0), {"name":"if","hash":{},"fn":this.program(14, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1].is_team_game : depths[1]), {"name":"if","hash":{},"fn":this.program(16, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"10":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<div class=\"win_loss_badge win\">\n					<span class=\"text\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.w", {"name":"t","hash":{},"data":data})))
    + "</span>\n				</div>\n";
},"12":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<div class=\"win_loss_badge loss\">\n					<span class=\"text\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.l", {"name":"t","hash":{},"data":data})))
    + "</span>\n				</div>\n";
},"14":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<div class=\"win_loss_badge tie\">\n					<span class=\"text\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.t", {"name":"t","hash":{},"data":data})))
    + "</span>\n				</div>\n";
},"16":function(depth0,helpers,partials,data) {
  return "				<div class=\"win_loss_badge dontknow\">\n					<span class=\"text\">?</span>\n				</div>\n";
  },"18":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "- "
    + escapeExpression(((helper = (helper = helpers.rink_name || (depth0 != null ? depth0.rink_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rink_name","hash":{},"data":data}) : helper)));
},"20":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<div class=\"score\">\n					"
    + escapeExpression(((helper = (helper = helpers.home_score || (depth0 != null ? depth0.home_score : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"home_score","hash":{},"data":data}) : helper)))
    + "\n				</div>\n";
},"22":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<div class=\"score\">\n					"
    + escapeExpression(((helper = (helper = helpers.away_score || (depth0 != null ? depth0.away_score : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"away_score","hash":{},"data":data}) : helper)))
    + "\n				</div>\n";
},"24":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		<section class=\"timely_info\">\n			<div class=\"row\">\n				<div class=\"col-xs-2 icon\">\n					<i class=\""
    + escapeExpression(((helper = (helper = helpers.extra_info_icon || (depth0 != null ? depth0.extra_info_icon : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"extra_info_icon","hash":{},"data":data}) : helper)))
    + "\"></i>\n				</div>\n				<div class=\"col-xs-10\">\n					<h3>"
    + escapeExpression(((helper = (helper = helpers.extra_info || (depth0 != null ? depth0.extra_info : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"extra_info","hash":{},"data":data}) : helper)))
    + "</h3>\n					<p>"
    + escapeExpression(((helper = (helper = helpers.more_extra_info || (depth0 != null ? depth0.more_extra_info : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"more_extra_info","hash":{},"data":data}) : helper)))
    + "</p>\n				</div>\n			</div>\n		</section>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<a class=\"card boxscore";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.future : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.program(3, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.on_the_team : depth0), "&&", (depth0 != null ? depth0.future : depth0), {"name":"iff","hash":{},"fn":this.program(5, data, depths),"inverse":this.program(7, data, depths),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n\n	<section class=\"game-info\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.finalized : depth0), {"name":"if","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n		<div class=\"title extended\">\n			<div class=\"date\">\n				"
    + escapeExpression(((helpers.moment || (depth0 && depth0.moment) || helperMissing).call(depth0, (depth0 != null ? depth0.start_time : depth0), "ddd, MMM Do @ h:mm a", {"name":"moment","hash":{},"data":data})))
    + "\n			</div>\n			<div class=\"arena-and-rink\">\n				"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.rink : depth0)) != null ? stack1.name : stack1), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.rink_name : depth0), {"name":"if","hash":{},"fn":this.program(18, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</section>\n	<div class=\"teams\">\n		<section class=\"team home\">\n			<div class=\"team_info\">\n				<div class=\"profile_pic\">\n					<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.home_team : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n				</div>\n				<div class=\"team_name\">\n					"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.home_team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n					<span class=\"home-or-away\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.home", {"name":"t","hash":{},"data":data})))
    + "</span>\n				</div>\n			</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.finalized : depth0), {"name":"if","hash":{},"fn":this.program(20, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</section>\n		<section class=\"team away\">\n			<div class=\"team_info\">\n				<div class=\"profile_pic\">\n					<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.away_team : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n				</div>\n				<div class=\"team_name\">\n					"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.away_team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n					<span class=\"home-or-away\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.away", {"name":"t","hash":{},"data":data})))
    + "</span>\n				</div>\n			</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.finalized : depth0), {"name":"if","hash":{},"fn":this.program(22, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</section>\n	</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.extra_info : depth0), {"name":"if","hash":{},"fn":this.program(24, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</a>\n";
},"useData":true,"useDepths":true});



this["precompiled_templates"]["cards_event"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "	<div class=\"game card\">\n";
  },"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "	<a class=\"game card\" href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" mobile-href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" data-date=\""
    + escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "\" data-game-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "	<a href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" class=\"close_or_back\">\n		X\n	</a>\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "- "
    + escapeExpression(((helper = (helper = helpers.rink_name || (depth0 != null ? depth0.rink_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rink_name","hash":{},"data":data}) : helper)));
},"9":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, buffer = "	<section class=\"payment_methods\">\n";
  stack1 = ((helpers.gt || (depth0 && depth0.gt) || helperMissing).call(depth0, (depth0 != null ? depth0.vip_credits : depth0), 0, {"name":"gt","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n		<a href=\"#\" id=\"pay_by_stripe\" class=\"payment_method\">\n			<div class=\"icon_name_group\">\n				<div class=\"method_icon online\">\n					<svg version=\"1.1\" id=\"credit_icon_svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n						 width=\"155.47px\" height=\"108.557px\" viewBox=\"0 0 155.47 108.557\" style=\"enable-background:new 0 0 155.47 108.557;\"\n						 xml:space=\"preserve\">\n					<path d=\"M139.923,0H15.547C6.996,0,0,6.996,0,15.547v77.735c0,8.551,6.996,15.548,15.547,15.548h124.376\n						c8.552,0,15.547-6.997,15.547-15.548V15.547C155.47,6.996,148.475,0,139.923,0z M139.923,93.282H15.547V46.641h124.376V93.282z\n						 M139.923,23.32H15.547v-7.773h124.376V23.32z M31.094,62.965v4.664h4.664v-4.664H31.094z M59.079,72.293v4.664h9.328v-4.664h4.664\n						v-4.664h4.664v-4.664h-9.328v4.664h-4.664v4.664H59.079z M77.735,76.958v-4.664h-4.664v4.664H77.735z M54.415,76.958v-4.664h-9.328\n						v4.664H54.415z M59.079,67.629h4.664v-4.664h-9.328v9.328h4.664V67.629z M40.422,72.293h4.665v-4.664h4.664v-4.664h-9.329v4.664\n						h-4.664v4.664h-4.664v4.664h9.328V72.293z\"/>\n					</svg>\n\n					<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"credit_loader_svg\" viewBox=\"0 0 32 32\" width=\"64\" height=\"64\" fill=\"white\" style=\"display:none\">\n					  <circle cx=\"16\" cy=\"3\" r=\"0\">\n					    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n					  </circle>\n					  <circle transform=\"rotate(45 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n					    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.125s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n					  </circle>\n					  <circle transform=\"rotate(90 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n					    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.25s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n					  </circle>\n					  <circle transform=\"rotate(135 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n					    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.375s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n					  </circle>\n					  <circle transform=\"rotate(180 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n					    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.5s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n					  </circle>\n					  <circle transform=\"rotate(225 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n					    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.625s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n					  </circle>\n					  <circle transform=\"rotate(270 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n					    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.75s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n					  </circle>\n					  <circle transform=\"rotate(315 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n					    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.875s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n					  </circle>\n					  <circle transform=\"rotate(180 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n					    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.5s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n					  </circle>\n					</svg>\n				</div>\n				<div class=\"method_name\">\n					Credit card\n				</div>\n			</div>\n			<div class=\"extra_info\">\n				<span class=\"visible-xs-inline-block verb\">pay</span> <sup>$</sup>"
    + escapeExpression(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"price","hash":{},"data":data}) : helper)))
    + "\n			</div>\n		</a>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.pay_cash : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n		<a href=\"/games/add_player_to_game/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "?goalie=true\" class=\"payment_method\">\n			<div class=\"icon_name_group\">\n				<div class=\"method_icon goalies\">\n					<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n						 width=\"131.758px\" height=\"163.807px\" viewBox=\"0 0 131.758 163.807\" style=\"enable-background:new 0 0 131.758 163.807;\"\n						 xml:space=\"preserve\">\n					<path d=\"M129.66,141.077c-2.221-6.659-4.317-11.84-7.4-15.172c-3.083-3.33-8.387-12.087-12.458-15.047\n						c-4.07-2.961-1.727-5.551-1.109-8.387c0.616-2.838,3.206-10.484,7.4-12.088s9.374-5.553,6.167-8.264\n						c-3.207-2.714-4.935-9.251-4.935-9.251s0.987,0.617,0.74-6.785c-0.246-7.4-0.616-8.88-2.467-11.593\n						c-1.85-2.714,0.74-4.688-4.315-9.375c-5.058-4.687,4.563-4.07-12.46-16.036c-17.021-11.964-17.884-5.304-16.774-8.51\n						c1.111-3.207,1.111-11.717-2.712-15.788c-3.825-4.07-10.36-6.907-17.639-2.714c-7.278,4.193-5.304,6.044-7.216,12.212\n						c-1.911,6.167,0,10.607,0,10.607s-3.761,2.467-5.488,3.7c-1.727,1.233-5.181,2.96-6.414,5.058c-1.234,2.096-4.07,7.647-3.824,8.88\n						c0.246,1.233-0.986,4.687-2.344,6.291c-1.354,1.604-4.811,10.237-5.92,11.347c-1.109,1.11-7.895-2.22-7.895-2.22L9.401,26.737\n						c0,0-3.578-7.031-3.085-8.757c0.493-1.727-0.863-6.291-4.811-3.084c-3.946,3.208,1.11,4.934,1.11,4.934s11.965,29.355,13.445,31.823\n						c1.479,2.467,4.193,10.237,3.947,13.198c-0.248,2.96-2.345,13.938-8.882,23.189C4.59,97.29,9.771,98.524,9.771,98.524\n						s2.343,1.355,7.894,3.576s4.564,1.604,9.497-0.246c4.934-1.851,6.415-4.071,6.415-4.071l1.109,1.604c0,0-1.48,6.291-0.74,16.528\n						c0.74,10.238-0.616,10.978-5.798,14.186c-5.18,3.205-4.562,7.893-3.822,9.249c0.739,1.357,0,0,2.591,7.771\n						c2.59,7.771,7.894,6.414,7.894,6.414s3.946-0.863,13.69-1.232c9.743-0.371,5.675-9.992,8.141-3.208\n						c2.467,6.786,5.552,6.908,7.278,7.154c1.729,0.247,6.289,0,12.457-0.246c6.168-0.247,5.673-0.616,5.059-6.29\n						c-0.617-5.675-2.346-4.195-8.636-3.455c-6.289,0.74-9.866-1.85-9.62-2.961c0.247-1.108,4.811-14.43,4.686-18.131\n						c-0.122-3.7,3.513-7.029,3.513-7.029s6.603,13.074,18.937,24.422c12.335,11.348,3.947,6.167,11.349,15.788\n						c7.4,9.621,3.083,1.849,7.77,3.823c4.688,1.975,7.771,0.369,9.499,1.11c1.727,0.739,4.686,1.11,7.029-1.728\n						c2.345-2.836,0.123-5.304,0.123-5.304l5.674-2.837C131.757,153.411,131.88,147.737,129.66,141.077z M56.147,76.074\n						c-0.494,1.234-2.414,1.111-3.797,1.358c-1.384,0.246-8.908,7.398-9.4,8.263s3.33-12.95,3.33-12.95c5.057,0,9.25-10.114,9.25-10.114\n						s0.986,5.674,2.467,7.894C59.479,72.745,56.641,74.841,56.147,76.074z\"/>\n					</svg>\n				</div>\n				<div class=\"method_name\">\n					Goalies free\n				</div>\n			</div>\n			<div class=\"extra_info\">\n				<span class=\"visible-xs-inline-block verb\">pay</span> <sup>$</sup>0\n			</div>\n		</a>\n	</section>\n	<section class=\"stripe-secure\">\n		<a href=\"https://stripe.com/help/security\" target=\"_blank\" title=\"Learn more about our Secured Payment Technology\" class=\"payment_badge horizontal\"></a>\n	</section>\n";
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "			<a href=\"/games/add_player_to_game/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "?vip=true\" class=\"payment_method\">\n				<div class=\"icon_name_group\">\n					<div class=\"method_icon vip\">\n						<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n							 width=\"191.823px\" height=\"100.013px\" viewBox=\"0 0 191.823 100.013\" style=\"enable-background:new 0 0 191.823 100.013;\"\n							 xml:space=\"preserve\">\n						<g>\n							<polygon points=\"29.236,33.35 29.236,0.567 3.819,0.567 3.819,89.583 29.236,89.583 29.236,56.797 63.023,56.797 63.023,89.583\n								88.441,89.583 88.441,63.301 62.599,33.35 	\"/>\n							<path d=\"M122.584,59.536V28.814c0-0.997,0.379-1.848,1.191-2.678c0.919-0.939,1.859-1.523,2.932-1.804\n								c0.207-0.062,0.413-0.11,0.614-0.14c0.279-0.042,0.562-0.1,0.847-0.176h62.604V0.431l-62.866,0.136\n								c-8.33,0-15.602,2.749-21.604,8.171c-6.062,5.469-9.134,12.194-9.134,19.986v2.274l24.668,28.187\n								C122.082,59.303,122.33,59.42,122.584,59.536z\"/>\n							<path d=\"M185.514,74.069c0,0-5.194-2.507-28.75-2.273c-42.194,0.42-45.659-11.44-52.96-18.264\n								C93.767,41.599,68.643,11.527,59.015,0H43.804l56.521,65.51c21.605,23.545,26.112,23.293,26.112,23.293s25.708,7.343,50.132,10.662\n								c10.422,2.032,15.059-1.561,15.248-11.299C192.031,77.359,185.514,74.069,185.514,74.069z M148.753,93.07\n								c-2.746-0.579-5.308-1.146-7.628-1.675l0.263-16.48l-3.652,15.693c-2.552-0.603-4.659-1.123-6.218-1.516l3.995-17.176\n								c3.85,0.564,8.33,0.957,13.562,1.131L148.753,93.07z M167.782,96.618c-5.383-0.857-10.66-1.84-15.517-2.823l-1.96-20.703\n								c1.616,0.042,3.305,0.065,5.064,0.065c0.676,0,1.364-0.004,2.062-0.011c0.18-0.001,0.345-0.001,0.521-0.002l1.96,20.716\n								l3.176-20.713c3.173,0.033,5.907,0.117,8.257,0.238L167.782,96.618z M181.055,98.32c-1.418,0-2.995-0.155-4.756-0.476\n								c-1.106-0.141-2.216-0.292-3.329-0.449l-1.275-23.991c4.19,0.223,7.134,0.553,9.152,0.868l1.274,24.018\n								C181.777,98.309,181.421,98.32,181.055,98.32z\"/>\n						</g>\n						</svg>\n\n					</div>\n					<div class=\"method_name\">\n						HC VIP\n					</div>\n				</div>\n				<div class=\"extra_info\">\n					<span class=\"visible-xs-inline-block verb\">use</span> "
    + escapeExpression(((helpers.inflect || (depth0 && depth0.inflect) || helperMissing).call(depth0, (depth0 != null ? depth0.vip_credits : depth0), "credit", "credits", true, {"name":"inflect","hash":{},"data":data})))
    + "\n				</div>\n			</a>\n";
},"12":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "			<a href=\"/games/add_player_to_game/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"payment_method\">\n				<div class=\"icon_name_group\">\n					<div class=\"method_icon cash\">\n						<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n							 width=\"180.839px\" height=\"100.344px\" viewBox=\"0 0 180.839 100.344\" style=\"enable-background:new 0 0 180.839 100.344;\"\n							 xml:space=\"preserve\">\n						<g>\n							<path class=\"st0\" d=\"M165.62,11.73c0,12.146-0.336,23.56-0.336,37.11c0,9.941-0.486,21.281,0,29.432\n								c0.131,2.184-1.995,7.798,2.561,7.679l6.397,0.002V1.493c-49.281,0-104.499-0.432-156.117-1.28\n								c-1.843,0.716-3.122,1.997-3.84,3.839v8.145L165.62,11.73z\"/>\n							<path class=\"st0\" d=\"M4.048,14.289c51.618,0.848,106.662,1.28,156.118,1.28c0,28.152,0,58.961,0,83.177\n								c-49.933,2.119-108.75,2.141-158.678,0c-2.959-24.34-0.446-54.152-1.279-80.618C0.926,16.286,2.206,15.005,4.048,14.289z\n								 M30.92,24.526c-1.64,1.772-1.64,1.772-1.279,3.839c0.334,3.747-3.084,5.285-3.972,8.573c-3.035,1.569-3.047,3.551-6.266,5.503\n								c-2.749,1.667-8.476,0.929-8.958,5.118c0,6.825,0,13.65,0,20.475c9.92,4.155,18.851,9.303,20.475,21.754\n								c32.844,0,65.689,0,98.533,0c3.739-10.338,8.947-19.205,21.755-20.475c0-8.104,0-16.209,0-24.313\n								c-7.543-1.004-12.776-3.895-16.636-8.958c-3.013-3.953-1.882-10.4-6.398-11.517C95.756,24.526,63.34,24.526,30.92,24.526z\"/>\n							<path class=\"st0\" d=\"M76.988,28.365c24.679-3.042,38.865,19.547,31.991,39.67c-2.877,8.425-16.113,19.041-28.151,19.194\n								C63.526,87.45,42.542,67.324,52.675,45.001C55.924,37.842,63.86,29.984,76.988,28.365z M78.268,39.882\n								c-13.549,0.685-11.236,18.375,0,19.195c-0.779,3.06,1.606,9.284-1.28,10.237c-3.489-1.203-2.431-6.953-8.958-5.119\n								c0.717,6.109,5.049,8.604,10.238,10.238c0.123,2.01-0.171,4.437,2.56,3.838c3.354-6.497,12.796-6.059,12.796-14.076\n								c0-6.465-5.262-7.562-11.517-11.517c0-2.986,0-5.971,0-8.958c2.813,1.099,5.698,8.706,10.237,3.839\n								c-2.195-3.776-3.816-8.127-10.237-7.678c0-1.28,0-2.559,0-3.839c-1.279,0-2.56,0-3.839,0\n								C78.268,37.323,78.268,38.603,78.268,39.882z\"/>\n							<path class=\"st0\" d=\"M76.988,43.721c2.862,0.551,0.52,6.306,1.28,8.958C72.125,53.279,74.584,45.239,76.988,43.721z\"/>\n							<path class=\"st0\" d=\"M82.107,60.357c7.173-2.503,7.173,11.459,0,8.957C82.107,66.328,82.107,63.343,82.107,60.357z\"/>\n						</g>\n						</svg>\n					</div>\n					<div class=\"method_name\">\n						Pay cash\n					</div>\n				</div>\n				<div class=\"extra_info\">\n					<span class=\"visible-xs-inline-block verb\">pay</span> <sup>$</sup>"
    + escapeExpression(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"price","hash":{},"data":data}) : helper)))
    + "\n				</div>\n			</a>\n";
},"14":function(depth0,helpers,partials,data) {
  return "	</div>\n";
  },"16":function(depth0,helpers,partials,data) {
  return "	</a>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, functionType="function", buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.payment : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.payment : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<section class=\"title extended\">\n		<div class=\"date\">\n			"
    + escapeExpression(((helpers.moment || (depth0 && depth0.moment) || helperMissing).call(depth0, (depth0 != null ? depth0.start_time : depth0), "ddd, MMM Do @ h:mm a", {"name":"moment","hash":{},"data":data})))
    + "\n		</div>\n		<div class=\"arena-and-rink\">\n			"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.rink : depth0)) != null ? stack1.name : stack1), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.rink_name : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n		</div>\n	</section>\n\n	<section class=\"game\">\n		<div class=\"profile_pic\">\n			<img class=\"touch\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n		</div>\n		<div class=\"game_info\">\n			<div class=\"game_title\">\n				"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\n			</div>\n			<div class=\"extra_info\">\n				"
    + escapeExpression(((helper = (helper = helpers.social_proof || (depth0 != null ? depth0.social_proof : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"social_proof","hash":{},"data":data}) : helper)))
    + "\n			</div>\n		</div>\n		<div class=\"event_stats\">\n			<div class=\"attendies\"><i class=\"icon-users\"></i>"
    + escapeExpression(((helper = (helper = helpers.attendees_count || (depth0 != null ? depth0.attendees_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"attendees_count","hash":{},"data":data}) : helper)))
    + "</div>\n			<div class=\"comment_count\"><i class=\"icon-comments\"></i>"
    + escapeExpression(((helper = (helper = helpers.comments_count || (depth0 != null ? depth0.comments_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"comments_count","hash":{},"data":data}) : helper)))
    + "</div>\n		</div>\n	</section>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.payment : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.payment : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.program(16, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});



this["precompiled_templates"]["cards_event_education"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "			<div class=\"event_teaser\">\n				<div class=\"profile_pic\">\n					<img src=\""
    + escapeExpression(((helper = (helper = helpers.profile_picture || (depth0 != null ? depth0.profile_picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"profile_picture","hash":{},"data":data}) : helper)))
    + "\">\n				</div>\n				<div class=\"event_info\">\n					<div class=\"event_time\">\n						"
    + escapeExpression(((helpers.moment || (depth0 && depth0.moment) || helperMissing).call(depth0, (depth0 != null ? depth0.start_time : depth0), "ddd, MMM Do @ h:mm a", {"name":"moment","hash":{},"data":data})))
    + "\n					</div>\n					<div class=\"event_title ellipsis\">\n						"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\n					</div>\n				</div>\n			</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<a class=\"card event_education clickable\" href=\"/events\" mobile-href=\"/events\">\n	<section class=\"title extended\">\n		<div class=\"date\">\n			"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\n		</div>\n		<div class=\"arena-and-rink\">\n			"
    + escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"location","hash":{},"data":data}) : helper)))
    + "\n		</div>\n	</section>\n	<section class=\"event_education_area\">\n		<div class=\"event_icon\">\n			<i class=\"icon-calendar\"></i>\n		</div>\n		<div class=\"event_teasers\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.featured_events : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n	</section>\n</a>";
},"useData":true});



this["precompiled_templates"]["cards_game"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.cards_boxscore, '	', 'cards_boxscore', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.cards_event, '	', 'cards_event', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.is_versus_game : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"usePartial":true,"useData":true});



this["precompiled_templates"]["cards_latest_photos"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n				<div class=\"photo\">\n					<img src=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n				</div>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<a class=\"card latest-photos clickable\" href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.link : stack1), depth0))
    + "/photos\">\n\n	<section class='block-title'>\n		<h3>Latest photos</h3>\n	</section>\n\n	<section class='photos'>\n\n		<div class=\"photo\">\n		\n			<div class=\"featured\">\n			\n				<img src='"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.featured_photo : depth0)) != null ? stack1.url : stack1), depth0))
    + "'>\n				\n			</div>\n			\n		</div>\n\n		<div class=\"thumbnails\">\n		\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.photos : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n		</div>\n		\n	</section>\n\n	<section class=\"about\">\n\n		<h4>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n\n		<div class=\"timeago\">\n			\n			"
    + escapeExpression(((helpers.moment || (depth0 && depth0.moment) || helperMissing).call(depth0, (depth0 != null ? depth0.created_at : depth0), "MMM Do @ h:mm a", {"name":"moment","hash":{},"data":data})))
    + "\n			\n		</div>\n\n	</section>\n	\n</a>";
},"useData":true});



this["precompiled_templates"]["cards_photo_album"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "<a class=\"card photo-album clickable\" href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n\n	<section class='photos'>\n\n		<div class=\"photo\">\n		\n			<div class=\"featured\">\n			\n				<img src='"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.featured_photo : depth0)) != null ? stack1.url : stack1), depth0))
    + "'>\n				\n			</div>\n			\n		</div>\n		\n	</section>\n\n	<section class=\"about\">\n\n		<h3>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n\n		<div class=\"timeago\">\n			\n			"
    + escapeExpression(((helpers.moment || (depth0 && depth0.moment) || helperMissing).call(depth0, (depth0 != null ? depth0.created_at : depth0), "MMM Do @ h:mm a", {"name":"moment","hash":{},"data":data})))
    + "\n			\n		</div>\n\n	</section>\n		\n</a>";
},"useData":true});



this["precompiled_templates"]["cards_player_stat"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "goalie", (depth0 != null ? depth0.total_players : depth0), {"name":"t","hash":{},"data":data})));
  },"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "player", (depth0 != null ? depth0.total_players : depth0), {"name":"t","hash":{},"data":data})));
  },"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "					\n					<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.w", {"name":"t","hash":{},"data":data})))
    + "</th>\n					<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.gaa", {"name":"t","hash":{},"data":data})))
    + "</th>\n					<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.so", {"name":"t","hash":{},"data":data})))
    + "</th>\n					<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.s_perc", {"name":"t","hash":{},"data":data})))
    + "</th>\n";
},"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "					\n					<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.g", {"name":"t","hash":{},"data":data})))
    + "</th>\n					<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.a", {"name":"t","hash":{},"data":data})))
    + "</th>\n					<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.pts", {"name":"t","hash":{},"data":data})))
    + "</th>\n";
},"9":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "					<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.goalie_gp || (depth0 != null ? depth0.goalie_gp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"goalie_gp","hash":{},"data":data}) : helper)))
    + "</td>\n					<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.wins || (depth0 != null ? depth0.wins : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"wins","hash":{},"data":data}) : helper)))
    + "</td>\n					<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.gaa || (depth0 != null ? depth0.gaa : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gaa","hash":{},"data":data}) : helper)))
    + "</td>\n					<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.so || (depth0 != null ? depth0.so : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"so","hash":{},"data":data}) : helper)))
    + "</td>\n					<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.sv || (depth0 != null ? depth0.sv : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sv","hash":{},"data":data}) : helper)))
    + "</td>\n";
},"11":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "					<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.gp || (depth0 != null ? depth0.gp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gp","hash":{},"data":data}) : helper)))
    + "</td>\n					<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.goals || (depth0 != null ? depth0.goals : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"goals","hash":{},"data":data}) : helper)))
    + "</td>\n					<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.assists || (depth0 != null ? depth0.assists : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"assists","hash":{},"data":data}) : helper)))
    + "</td>\n					<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.points || (depth0 != null ? depth0.points : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"points","hash":{},"data":data}) : helper)))
    + "</td>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, functionType="function", buffer = "<a class=\"card player-stat js-no-click\" href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.division : depth0)) != null ? stack1.link : stack1), depth0))
    + "\">\n	<section class=\"title\">\n		<h2>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.season : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.division : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.rankings", {"name":"t","hash":{},"data":data})))
    + "</h2>\n	</section>\n	<section class=\"ranked\">\n		<div class=\"ranked_text_container\">\n			<div class=\"ranked_text\">\n				"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.ranked", {"name":"t","hash":{},"data":data})))
    + "\n			</div>\n		</div>\n		<div class=\"ranked_bubble\">\n			<div class=\"num\">\n				<div class=\"rank\">"
    + escapeExpression(((helper = (helper = helpers.rank || (depth0 != null ? depth0.rank : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rank","hash":{},"data":data}) : helper)))
    + "</div>\n				<sup>"
    + escapeExpression(((helper = (helper = helpers.ordinal || (depth0 != null ? depth0.ordinal : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ordinal","hash":{},"data":data}) : helper)))
    + "</sup>\n			</div>\n		</div>\n		<div class=\"ranked_out_of_container\">\n			<div class=\"ranked_out_of\">\n				"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "of", {"name":"t","hash":{},"data":data})))
    + " "
    + escapeExpression(((helper = (helper = helpers.total_players || (depth0 != null ? depth0.total_players : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total_players","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.goalie : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</section>\n	<section class=\"standings\">\n		<table class=\"table\">\n			<tr>\n				<th>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "player", {"name":"t","hash":{},"data":data})))
    + "</th>\n				<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.gp", {"name":"t","hash":{},"data":data})))
    + "</th>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.goalie : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</tr>\n			<tr>\n				<td>\n					<div class=\"profile_pic\">\n						<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n					</div>\n					<span class=\"player_name\">\n						"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n						<span class=\"extra_info\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span>\n					</span>\n				</td>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.goalie : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.program(11, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</tr>\n		</table>\n	</section>\n</a>";
},"useData":true});



this["precompiled_templates"]["cards_registration"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<a href=\"/leagues/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.slug : stack1), depth0))
    + "/manage/seasons/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.season : depth0)) != null ? stack1.id : stack1), depth0))
    + "/preferences/registrations\" class=\"title-btn\">\n				<i class='fa-pencil-square-o'></i>\n			</a>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		<div class=\"attached_photo\">\n			<img src=\""
    + escapeExpression(((helper = (helper = helpers.attached_photo || (depth0 != null ? depth0.attached_photo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"attached_photo","hash":{},"data":data}) : helper)))
    + "\">\n		</div>\n";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "			<a href=\""
    + escapeExpression(((helper = (helper = helpers.registration_individual_full_link || (depth0 != null ? depth0.registration_individual_full_link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"registration_individual_full_link","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-action individual_registration\">\n				<i class=\"icon-user\"></i><span>Individual registration</span>\n			</a>\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "			<a href=\""
    + escapeExpression(((helper = (helper = helpers.registration_full_link || (depth0 != null ? depth0.registration_full_link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"registration_full_link","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-action team_registration\">\n				<i class=\"icon-users2\"></i><span>Team registration</span>\n			</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"card registration\">\n\n	<section class=\"block-title\">\n	\n		<h3>			\n			"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\n		</h3>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.admin : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		\n	</section>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.attached_photo : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<section class=\"main\">\n\n		";
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n\n	</section>\n\n	<section class=\"actions\">\n		\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.open_individual_registration : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.open_team_registration : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		\n	</section>\n	\n</div>";
},"useData":true});



this["precompiled_templates"]["cards_standing"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "&ndash; "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.division : depth0)) != null ? stack1.full_name : stack1), depth0));
},"3":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "				<tr ";
  stack1 = ((helpers.is || (depth0 && depth0.is) || helperMissing).call(depth0, (depths[1] != null ? depths[1].team_id : depths[1]), ((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.id : stack1), {"name":"is","hash":{},"fn":this.program(4, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n					<td>"
    + escapeExpression(((helper = (helper = helpers.rank || (depth0 != null ? depth0.rank : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rank","hash":{},"data":data}) : helper)))
    + "</td>\n					<td>\n						<div class=\"profile_pic\">\n							<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.link : stack1), depth0))
    + "\"><img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\" class=\"touch\"></a>\n						</div>\n						<div class=\"team_name\">\n							<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.link : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a>\n						</div>\n					</td>\n					<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.gp || (depth0 != null ? depth0.gp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gp","hash":{},"data":data}) : helper)))
    + "</td>\n					<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.win || (depth0 != null ? depth0.win : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"win","hash":{},"data":data}) : helper)))
    + "</td>\n					<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.loss || (depth0 != null ? depth0.loss : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"loss","hash":{},"data":data}) : helper)))
    + "</td>\n					<td class=\"hidden-xs hidden-sm stats\">"
    + escapeExpression(((helper = (helper = helpers.pts || (depth0 != null ? depth0.pts : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pts","hash":{},"data":data}) : helper)))
    + "</td>\n					<td class=\"hidden-xs hidden-sm stats\">"
    + escapeExpression(((helper = (helper = helpers.pim || (depth0 != null ? depth0.pim : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pim","hash":{},"data":data}) : helper)))
    + "</td>\n					<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.wp || (depth0 != null ? depth0.wp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"wp","hash":{},"data":data}) : helper)))
    + "</td>\n				</tr>\n";
},"4":function(depth0,helpers,partials,data) {
  return "class=\"highlight\"";
  },"6":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<tr>\n					<td colspan=\"11\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.divisions_has_no_teams", {"name":"t","hash":{},"data":data})))
    + "</td>\n				</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = "<article class=\"card card_standings\">\n	<table id=\"division_standings_table\" class=\"table\">\n		<thead>\n			<tr>\n				<th colspan=\"1\">#</th>\n			  	<th colspan=\"1\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams", {"name":"t","hash":{},"data":data})))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.division : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</th>\n			  	<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.gp", {"name":"t","hash":{},"data":data})))
    + "</th>\n			  	<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.w", {"name":"t","hash":{},"data":data})))
    + "</th>\n			  	<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.l", {"name":"t","hash":{},"data":data})))
    + "</th>\n			  	<th class=\"hidden-xs hidden-sm stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.pts", {"name":"t","hash":{},"data":data})))
    + "</th>\n				<th class=\"hidden-xs hidden-sm stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.pim", {"name":"t","hash":{},"data":data})))
    + "</th>\n				<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.pts_perc", {"name":"t","hash":{},"data":data})))
    + "</th>\n			</tr>\n		</thead>\n		<tbody id=\"trc_teams_body\">\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.standings : depth0), {"name":"each","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.standings : depth0), {"name":"unless","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</tbody>\n	</table>\n	<div class=\"explanation\">\n\n		"
    + escapeExpression(((helper = (helper = helpers.standings_order_explanation || (depth0 != null ? depth0.standings_order_explanation : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"standings_order_explanation","hash":{},"data":data}) : helper)))
    + "\n\n	</div>\n</article>\n";
},"useData":true,"useDepths":true});



this["precompiled_templates"]["cards_status"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		<div class=\"js-status-photo attached_photo\">\n			<img src=\""
    + escapeExpression(((helper = (helper = helpers.attached_photo || (depth0 != null ? depth0.attached_photo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"attached_photo","hash":{},"data":data}) : helper)))
    + "\">\n		</div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.video_iframe_code : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "			<div class=\"attached_iframe\">\n				";
  stack1 = ((helper = (helper = helpers.video_iframe_code || (depth0 != null ? depth0.video_iframe_code : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"video_iframe_code","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n			</div>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "\n		<section class=\"title\">\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.team : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "web", {"name":"ifOs","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n		</section>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.team : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  return "				<h2>Team looking for players</h2>\n";
  },"9":function(depth0,helpers,partials,data) {
  return "				<h2>Player looking for a team</h2>\n";
  },"11":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "				<div class=\"card_options\">\n					<div class=\"dropdown\">\n						<button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n							<i class=\"icon-arrow-down2\"></i>\n						</button>\n						<ul class=\"dropdown-menu\" role=\"menu\">\n							<li role=\"presentation\">\n								<a role=\"menuitem\" tabindex=\"-1\" class=\"delete_status\">Delete this post</a>\n							</li>\n\n							<li role=\"presentation\">\n								<a role=\"menuitem\" tabindex=\"-1\" href=\"/team-finder\">Go to the Team Finder</a>\n							</li>\n\n							<li role=\"presentation\">\n								<a role=\"menuitem\" tabindex=\"-1\" href=\"mailto:support@hockey-community.com?subject=Report Post "
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"report_to_hc\">Report to HC</a>\n							</li>\n						</ul>\n					</div>\n				</div>\n";
},"13":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "\n			<section class=\"team_info has_extra_info\">\n				<div class=\"profile_pic\">\n					<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/team/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n						<img class=\"touch\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n					</a>\n				</div>\n				<div class=\"team_name\">\n					<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/team/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n						"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n					</a>\n\n					<div class=\"extra_info\">\n						<a href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helpers.moment || (depth0 && depth0.moment) || helperMissing).call(depth0, (depth0 != null ? depth0.created_at : depth0), {"name":"moment","hash":{},"data":data})))
    + "</a> -\n						<span class=\"league\">Captained by <a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/team/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "</a> in "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.location : stack1), depth0))
    + "</span>\n					</div>\n\n				</div>\n			</section>\n\n";
},"15":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "\n			<section class=\"about\">\n				<div class=\"profile_pic\">\n					<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n						<img class=\"touch\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n					</a>\n				</div>\n				<div class=\"user_info\">\n					<div class=\"name\">\n						<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n							"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n						</a>\n					</div>\n					<div class=\"timeago\">\n						<a href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helpers.moment || (depth0 && depth0.moment) || helperMissing).call(depth0, (depth0 != null ? depth0.created_at : depth0), {"name":"moment","hash":{},"data":data})))
    + "</a>\n						- "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.location : stack1), depth0))
    + "\n					</div>\n				</div>\n			</section>\n";
},"17":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "\n	<section class=\"about\">\n\n		<div class=\"profile_pic\">\n			<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n				<img class=\"touch\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n			</a>\n		</div>\n\n		<div class=\"user_info\">\n			<div class=\"name\">\n				<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n					"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n				</a>\n			</div>\n			<div class=\"timeago\">\n				<a href=\""
    + escapeExpression(lambda((depth0 != null ? depth0.full_link : depth0), depth0))
    + "\" class=\"js-no-click\" mobile-href='/status/"
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "'>"
    + escapeExpression(((helpers.moment || (depth0 && depth0.moment) || helperMissing).call(depth0, (depth0 != null ? depth0.created_at : depth0), {"name":"moment","hash":{},"data":data})))
    + "</a>\n				- "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.location : stack1), depth0))
    + "\n			</div>\n		</div>\n\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "web", {"name":"ifOs","hash":{},"fn":this.program(18, data),"inverse":this.program(21, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	</section>\n";
},"18":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "			<div class=\"card_options\">\n				<div class=\"dropdown\">\n					<button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n						<i class=\"icon-arrow-down2\"></i>\n					</button>\n					<ul class=\"dropdown-menu\" role=\"menu\">\n						<li role=\"presentation\">\n							<a role=\"menuitem\" tabindex=\"-1\" class=\"delete_status\">Delete this post</a>\n						</li>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.attached_photo : depth0), {"name":"if","hash":{},"fn":this.program(19, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n						<li role=\"presentation\">\n							<a role=\"menuitem\" tabindex=\"-1\" class=\"share\" data-medium=\"facebook\" data-href=\""
    + escapeExpression(((helper = (helper = helpers.full_link || (depth0 != null ? depth0.full_link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"full_link","hash":{},"data":data}) : helper)))
    + "\">Share on Facebook</a>\n						</li>\n						<li role=\"presentation\">\n							<a role=\"menuitem\" tabindex=\"-1\" class=\"block_user\">Block "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "</a>\n						</li>\n						<li role=\"presentation\">\n							<a role=\"menuitem\" tabindex=\"-1\" href=\"mailto:support@hockey-community.com?subject=Report&amp;body="
    + escapeExpression(lambda((depth0 != null ? depth0.link : depth0), depth0))
    + "\" class=\"report_to_hc\">Report to HC</a>\n						</li>\n					</ul>\n				</div>\n			</div>\n";
},"19":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "							<li role=\"presentation\">\n								<a role=\"menuitem\" tabindex=\"-1\" class=\"download\" href=\""
    + escapeExpression(((helper = (helper = helpers.attached_photo_hd || (depth0 != null ? depth0.attached_photo_hd : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"attached_photo_hd","hash":{},"data":data}) : helper)))
    + "\" download=\""
    + escapeExpression(((helper = (helper = helpers.attached_photo_hd || (depth0 != null ? depth0.attached_photo_hd : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"attached_photo_hd","hash":{},"data":data}) : helper)))
    + "\">Download the image</a>\n							</li>\n";
},"21":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "			<div class=\"card_options\" data-fullname=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\" ";
  stack1 = ((helpers.isCurrentUser || (depth0 && depth0.isCurrentUser) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), {"name":"isCurrentUser","hash":{},"fn":this.program(22, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "><i class=\"icon-vertical-menu3\"></i></div>\n";
},"22":function(depth0,helpers,partials,data) {
  return " data-deletable=\"true\"";
  },"24":function(depth0,helpers,partials,data) {
  var stack1, buffer = "		<div class=\"team_finder_info\">\n		<div class=\"row flexbox-row\">\n\n			<div class=\"flexbox-col\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.positions : depth0), {"name":"if","hash":{},"fn":this.program(25, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</div>\n\n			<div class=\"flexbox-col\">\n				<div class=\"levels\">\n					<ul>\n						<li class=\"header\">Levels</li>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.levels : depth0), {"name":"each","hash":{},"fn":this.program(32, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "					</ul>\n				</div>\n			</div>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.season : depth0)) != null ? stack1.name : stack1), {"name":"if","hash":{},"fn":this.program(34, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</div>\n			</div>\n\n\n";
},"25":function(depth0,helpers,partials,data) {
  var stack1, buffer = "					<div class=\"positions\">\n						<ul>\n							<li class=\"header\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.team : depth0), {"name":"if","hash":{},"fn":this.program(26, data),"inverse":this.program(28, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "							</li>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.positions : depth0), {"name":"each","hash":{},"fn":this.program(30, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "						</ul>\n					</div>\n";
},"26":function(depth0,helpers,partials,data) {
  return "									LOOKING FOR\n";
  },"28":function(depth0,helpers,partials,data) {
  return "									LOOKING TO PLAY\n";
  },"30":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "								<li>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"32":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "							<li>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"34":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			</div>\n			<div class=\"row flexbox-row\">\n					<div class=\"flexbox-col\">\n						<div class=\"extra_info\">\n							<ul>\n								<li class=\"header\">Team history</li>\n								<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.league_name : stack1), depth0))
    + "</li>\n								<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.season : depth0)) != null ? stack1.name : stack1), depth0))
    + "</li>\n								<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.division : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "</li>\n							</ul>\n						</div>\n					</div>\n";
},"36":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "				<div class=\"status_likes_box_text\">\n					";
  stack1 = ((helper = (helper = helpers.like_text || (depth0 != null ? depth0.like_text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"like_text","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n				</div>\n";
},"38":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.actions : depth0), {"name":"unless","hash":{},"fn":this.program(39, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"39":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<div class=\"hc_like_glove_button animated\" id=\"like_status_"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n					<i class=\"fa-thumbs-o-up\"></i><span>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "status.like", {"name":"t","hash":{},"data":data})))
    + "</span>\n				</div>\n";
},"41":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.card_actions, '		', 'card_actions', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"43":function(depth0,helpers,partials,data) {
  return " empty";
  },"45":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.more_comments : depth0), {"name":"each","hash":{},"fn":this.program(46, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.comments : depth0), {"name":"each","hash":{},"fn":this.program(46, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"46":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.status_comment, '				', 'status_comment', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"48":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.more_comments : depth0), {"name":"if","hash":{},"fn":this.program(49, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.no_comments : depth0), {"name":"unless","hash":{},"fn":this.program(51, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.comments : depth0), {"name":"each","hash":{},"fn":this.program(46, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"49":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<div class=\"show_all_comments\">\n					<i class=\"icon-arrow-down\"></i>Show all "
    + escapeExpression(((helper = (helper = helpers.comments_count || (depth0 != null ? depth0.comments_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"comments_count","hash":{},"data":data}) : helper)))
    + " comments\n				</div>\n";
},"51":function(depth0,helpers,partials,data) {
  var stack1, buffer = "				<div class=\"more_comments\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.more_comments : depth0), {"name":"each","hash":{},"fn":this.program(52, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</div>\n";
},"52":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.status_comment, '						', 'status_comment', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"54":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		<section class=\"send_comment\">\n			<input class=\"status_comment_input\" type=\"text\" placeholder=\""
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "add_your_comment", {"name":"t","hash":{},"data":data})))
    + "\"><!--\n			--><button type=\"button\" class=\"status_comment_button btn btn-default\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "send", {"name":"t","hash":{},"data":data})))
    + "</button>\n		</section>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<article class=\"status card has_card_options\" data-status-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-user-id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.attached_photo : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.is_team_finder_request : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(17, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<section class=\"main\">\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.levels : depth0), {"name":"if","hash":{},"fn":this.program(24, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n		<p>";
  stack1 = ((helper = (helper = helpers.web_message_html || (depth0 != null ? depth0.web_message_html : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"web_message_html","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</p>\n\n		<section class=\"like_button\" data-status-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.likers_user_ids : depth0), {"name":"if","hash":{},"fn":this.program(36, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.upper_actions : depth0), {"name":"unless","hash":{},"fn":this.program(38, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</section>\n	</section>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.upper_actions : depth0), {"name":"if","hash":{},"fn":this.program(41, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<section class=\"comments";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.comments : depth0), {"name":"unless","hash":{},"fn":this.program(43, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.expanded_comments : depth0), {"name":"if","hash":{},"fn":this.program(45, data),"inverse":this.program(48, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</section>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.actions : depth0), {"name":"if","hash":{},"fn":this.program(41, data),"inverse":this.program(54, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</article>\n";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["cards_team_roster"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.cover_background : depth0), {"name":"unless","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  return "				<div class=\"upload_cover_prompt\">\n					<div class=\"message\">\n						<i class=\"icon-add-photo\"></i>change cover photo\n					</div>\n				</div>\n";
  },"4":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "				<div class=\"meta primary\">\n					"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.division : depth0)) != null ? stack1.full_name : stack1), depth0))
    + " / "
    + escapeExpression(((helper = (helper = helpers.league_name || (depth0 != null ? depth0.league_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"league_name","hash":{},"data":data}) : helper)))
    + "\n				</div>\n";
},"6":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "		<div class=\"container\">\n			<div class=\"page_title\">\n				<div class=\"title\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.can_add_players : depth0), {"name":"if","hash":{},"fn":this.program(7, data, depths),"inverse":this.program(9, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "				</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.season_groups : depth0), {"name":"if","hash":{},"fn":this.program(11, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</div>\n		</div>\n\n		<div class=\"container\">\n\n			<article class=\"card roster\">\n				<section class=\"standings\">\n					<table id=\"team_roster_players_table\" class=\"table\">\n						<thead>\n							<tr>\n								<th data-ascending=\"true\">#</th>\n								<th>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "player", {"name":"t","hash":{},"data":data})))
    + "</th>\n								<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.gp", {"name":"t","hash":{},"data":data})))
    + "</th>\n								<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.g", {"name":"t","hash":{},"data":data})))
    + "</th>\n								<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.a", {"name":"t","hash":{},"data":data})))
    + "</th>\n								<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.pts", {"name":"t","hash":{},"data":data})))
    + "</th>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.can_edit_roster : depth0), {"name":"if","hash":{},"fn":this.program(15, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "							</tr>\n						</thead>\n						<tbody>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.roster : depth0)) != null ? stack1.players : stack1), {"name":"each","hash":{},"fn":this.program(17, data, depths),"inverse":this.program(22, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "						</tbody>\n					</table>\n				</section>\n			</article>\n\n			<article class=\"card roster\">\n				<section class=\"standings\">\n					<table id=\"team_roster_goalies_table\" class=\"table\">\n						<thead>\n							<tr data-type=\"goalies\">\n								<th data-ascending=\"true\">#</th>\n								<th>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "goalie", {"name":"t","hash":{},"data":data})))
    + "</th>\n								<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.gp", {"name":"t","hash":{},"data":data})))
    + "</th>\n								<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.w", {"name":"t","hash":{},"data":data})))
    + "</th>\n								<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.gaa", {"name":"t","hash":{},"data":data})))
    + "</th>\n								<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.so", {"name":"t","hash":{},"data":data})))
    + "</th>\n								<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.s_perc", {"name":"t","hash":{},"data":data})))
    + "</th>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.can_edit_roster : depth0), {"name":"if","hash":{},"fn":this.program(15, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "							</tr>\n						</thead>\n\n						<tbody>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.roster : depth0)) != null ? stack1.goalies : stack1), {"name":"each","hash":{},"fn":this.program(24, data, depths),"inverse":this.program(26, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "						</tbody>\n					</table>\n				</section>\n			</article>\n		</div>\n";
},"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "						<button type=\"button\" id=\"add_player\" class=\"btn btn-success\"><i class=\"icon-plus\"></i> "
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.add_player", {"name":"t","hash":{},"data":data})))
    + "</button>\n";
},"9":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "						"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.roster", {"name":"t","hash":{},"data":data})))
    + "\n";
},"11":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "					<div class=\"season_scope\">\n						<div class=\"select_container\">\n							<select id=\"seasons_selector\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.season_groups : depth0), {"name":"each","hash":{},"fn":this.program(12, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "							</select>\n						</div>\n					</div>\n";
},"12":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "									<optgroup label=\""
    + escapeExpression(lambda((depth0 != null ? depth0['0'] : depth0), depth0))
    + "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0['1'] : depth0), {"name":"each","hash":{},"fn":this.program(13, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"13":function(depth0,helpers,partials,data,depths) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return "											<option value=\""
    + escapeExpression(lambda((depth0 != null ? depth0['1'] : depth0), depth0))
    + "\" "
    + escapeExpression(((helpers.seasonSelect || (depth0 && depth0.seasonSelect) || helperMissing).call(depth0, (depths[2] != null ? depths[2].current_season_id : depths[2]), (depths[2] != null ? depths[2].selected_season_id : depths[2]), (depth0 != null ? depth0['1'] : depth0), {"name":"seasonSelect","hash":{},"data":data})))
    + ">"
    + escapeExpression(lambda((depth0 != null ? depth0['0'] : depth0), depth0))
    + "</option>\n";
},"15":function(depth0,helpers,partials,data) {
  return "									<th class=\"js-no-click\">&nbsp;</th>\n";
  },"17":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "								<tr>\n									<td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.number : stack1), depth0))
    + "</td>\n									<td>\n										<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n											<div class=\"profile_pic\">\n												<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n											</div>\n											<span class=\"player_name\">\n												"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.captain : stack1), {"name":"if","hash":{},"fn":this.program(18, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n											</span>\n										</a>\n									</td>\n									<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.gp || (depth0 != null ? depth0.gp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gp","hash":{},"data":data}) : helper)))
    + "</td>\n									<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.goals || (depth0 != null ? depth0.goals : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"goals","hash":{},"data":data}) : helper)))
    + "</td>\n									<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.assists || (depth0 != null ? depth0.assists : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"assists","hash":{},"data":data}) : helper)))
    + "</td>\n									<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.points || (depth0 != null ? depth0.points : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"points","hash":{},"data":data}) : helper)))
    + "</td>\n";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1].can_edit_roster : depths[1]), {"name":"if","hash":{},"fn":this.program(20, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "								</tr>\n";
},"18":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.captain : stack1), depth0))
    + ")";
},"20":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "										<td class=\"edit\">\n											<button type=\"button\" class=\"edit_player btn btn-default\" data-user-id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n												<i class=\"icon-vertical-menu3\"></i>\n											</button>\n										</td>\n";
},"22":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "								<tr>\n									<td colspan=\"7\">\n										"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.no_players_on_the_roster", {"name":"t","hash":{},"data":data})))
    + "\n									</td>\n								</tr>\n";
},"24":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "								<tr>\n									<td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.number : stack1), depth0))
    + "</td>\n									<td>\n										<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n											<div class=\"profile_pic\">\n												<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n											</div>\n											<span class=\"player_name\">\n												"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.captain : stack1), {"name":"if","hash":{},"fn":this.program(18, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n											</span>\n										</a>\n									</td>\n									<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.gp || (depth0 != null ? depth0.gp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gp","hash":{},"data":data}) : helper)))
    + "</td>\n									<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.wins || (depth0 != null ? depth0.wins : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"wins","hash":{},"data":data}) : helper)))
    + "</td>\n									<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.gaa || (depth0 != null ? depth0.gaa : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gaa","hash":{},"data":data}) : helper)))
    + "</td>\n									<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.so || (depth0 != null ? depth0.so : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"so","hash":{},"data":data}) : helper)))
    + "</td>\n									<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.sv || (depth0 != null ? depth0.sv : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sv","hash":{},"data":data}) : helper)))
    + "</td>\n";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1].can_edit_roster : depths[1]), {"name":"if","hash":{},"fn":this.program(20, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "								</tr>\n";
},"26":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "								<tr>\n									<td colspan=\"7\">\n										"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.no_goalies_on_the_roster", {"name":"t","hash":{},"data":data})))
    + "\n									</td>\n								</tr>\n";
},"28":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.loading, '		', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"card inset profile_header\">\n	<div id=\"team_cover_photo\" class=\"cover_photo\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.is_captain : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		<img src=\""
    + escapeExpression(((helper = (helper = helpers.cover_background || (depth0 != null ? depth0.cover_background : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cover_background","hash":{},"data":data}) : helper)))
    + "\">\n	</div>\n	<div class=\"pic_and_info\">\n\n		<div id=\"team_profile_pic\" class=\"profile_pic\">\n			<img src=\""
    + escapeExpression(((helper = (helper = helpers.profile_picture || (depth0 != null ? depth0.profile_picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"profile_picture","hash":{},"data":data}) : helper)))
    + "\">\n		</div>\n\n		<div class=\"profile_info\">\n			<div class=\"name\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.division : depth0), {"name":"if","hash":{},"fn":this.program(4, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "			<div class=\"meta bio_line_1\">\n				<div class=\"jersey_colours\">\n					<div class=\"jersey home\">\n						<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"2.7 1.15 85.5 92.299\" enable-background=\"new 2.7 1.15 85.5 92.299\"\n							 xml:space=\"preserve\" class=\"svg_jersey\">\n							<g id=\"outline\">\n								<path class=\"svg_jersey_outline\" style=\"fill:"
    + escapeExpression(((helper = (helper = helpers.home_outline_color || (depth0 != null ? depth0.home_outline_color : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"home_outline_color","hash":{},"data":data}) : helper)))
    + ";\" d=\"M87.9,76.15l-2-17.7c-0.102-0.7-0.301-1.3-0.7-1.8c0.399-0.7,0.399-1.6,0.2-2.4c0-0.1,0-0.1,0-0.2\n									c0-0.2-0.102-0.5-0.102-0.7c-0.1-0.6-0.1-1.1-0.199-1.7c-0.101-0.5-0.101-1-0.199-1.5c0-0.3-0.102-0.6-0.102-0.8\n									c-0.1-0.7-0.3-1.3-0.699-1.8c0.301-0.6,0.399-1.3,0.301-1.9c-1.102-10.1-2.301-19.4-3-24.1C79.7,9.95,67,4.35,59.7,2.05\n									c-1.2-0.4-2.5-0.1-3.4,0.8c-0.2-0.1-0.5-0.2-0.8-0.3c-2.6-0.6-5.6-0.9-9.1-0.9c-4.1,0-7.6,0.4-9.1,0.6c-0.6-0.7-1.6-1.1-2.6-1.1\n									h-0.2c-0.3,0-0.5,0-0.8,0.1c-0.9,0.2-22.2,5.1-24.4,20.2c-0.7,4.7-1.9,14-3,24.1c-0.1,0.7,0.1,1.4,0.4,2c-0.5,0.6-0.8,1.4-0.8,2.2\n									v0.5c0,0.5-0.1,1.1-0.2,1.6c-0.1,0.7-0.2,1.3-0.2,2c0,0.1,0,0.1,0,0.2v0.1c0,0.3-0.1,0.6-0.1,1c0,0.5,0.1,1,0.3,1.5\n									c-0.4,0.5-0.7,1.2-0.8,1.8c-1.1,9.8-2.1,18.5-2.2,19.899c0,0.101,0,0.199,0,0.301v0.199c0,1.199,0.6,2.301,1.6,3\n									c0.5,0.301,4.8,2.899,10,2.899l0,0c2.1,0,4-0.399,5.8-1.3v4.199c0,0.101,0,0.199,0,0.301c0.3,3.1,4,3.898,5.6,4.199\n									c3.9,0.801,10.5,1.199,19.6,1.301l0,0l0,0c9.1,0,15.7-0.5,19.6-1.301c1.6-0.301,5.3-1.101,5.6-4.199c0-0.102,0-0.2,0-0.301V83.35\n									c1.8,0.9,3.8,1.4,6,1.4l0,0c5.1,0,9.5-2.6,10-2.9c1-0.6,1.7-1.8,1.7-3C88.1,78.65,88.1,77.75,87.9,76.15z\"/>\n							</g>\n							<g id=\"main_jersey\">\n								<path class=\"svg_jersey_base\" style=\"fill:"
    + escapeExpression(((helper = (helper = helpers.home_color || (depth0 != null ? depth0.home_color : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"home_color","hash":{},"data":data}) : helper)))
    + ";\" d=\"M8.45,58.85c-1.2,10.101-2.1,18.5-2.2,19.8c0,0.101,0,0.199,0,0.199s7,4.4,12.7,1.301\n									c0-0.199,0.1-0.5,0.1-0.801v-0.1c0-0.2,0.1-0.5,0.1-0.8V78.35l0,0c0.6-4,1.6-11.1,2.6-17.8L8.45,58.85z M9.45,50.45L9.45,50.45\n									c-0.1,1.2-0.3,2.5-0.4,3.7l0,0c0,0.3-0.1,0.699-0.1,1l13.3,1.6c0-0.3,0.1-0.7,0.1-1c0-0.1,0-0.2,0-0.4c0-0.1,0-0.199,0-0.3\n									c0.1-1,0.3-2.1,0.4-3c0-0.2,0.1-0.5,0.1-0.7l-13.4-1.6C9.45,49.95,9.45,50.25,9.45,50.45z M46.45,17.55c0,0,8-4.5,8.3-11.6\n									c-7.7-1.7-17.6-0.1-17.6-0.1C39.45,14.35,46.45,17.55,46.45,17.55z M81.85,53.95c-0.1-1.2-0.299-2.3-0.397-3.5l0,0\n									c0-0.2-0.103-0.5-0.103-0.7l-13.398,1.6l0.1,0.7l0,0c0.2,1.2,0.3,2.4,0.5,3.7l0,0l0.1,1l13.401-1.6\n									C81.951,54.75,81.951,54.35,81.85,53.95z M80.951,46.05c-1.102-9.7-2.301-19.1-3-24c-1.5-10.2-13.901-15-19.301-16.7\n									c0.101,0.1,0.2,0.3,0.2,0.4c0,1-3.8,11.4-12.5,13.3l0.1-0.1l-0.3,0.1h-0.1l0,0c-2.5-0.5-4.6-1.8-6.3-3.3l-0.1-0.1l0,0\n									c-4.2-3.8-6.1-9.2-6.1-9.9c0-0.4,0.6-0.8,1.2-1.1h-0.2c0,0-19.8,4.4-21.7,17.3c-0.7,4.899-1.9,14.3-3,24l13.5,1.6\n									c0.3-2.6,0.6-4.3,0.6-4.3l-0.3,44.4c0,0,0.2,2.199,21.7,2.3l0,0c21.5-0.101,21.7-2.3,21.7-2.3l-0.3-44.4c0,0,0.2,1.7,0.6,4.3\n									L80.951,46.05z M84.451,76.55L84.451,76.55l-2-17.7l-13.301,1.6c0.9,6.7,1.9,13.8,2.601,17.8l0,0v0.1c0,0.2,0.1,0.4,0.1,0.7\n									c0,0.101,0,0.2,0,0.3c0,0.301,0.101,0.5,0.101,0.801c5.6,3.101,12.7-1.301,12.7-1.301S84.65,78.05,84.451,76.55z\"/>\n							</g>\n						</svg>\n						<div class=\"home_or_away\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.home", {"name":"t","hash":{},"data":data})))
    + "</div>\n					</div>\n					<div class=\"jersey away\">\n						<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"2.7 1.15 85.5 92.299\" enable-background=\"new 2.7 1.15 85.5 92.299\"\n							 xml:space=\"preserve\" class=\"svg_jersey\">\n							<g id=\"outline\">\n								<path class=\"svg_jersey_outline\" style=\"fill:"
    + escapeExpression(((helper = (helper = helpers.away_outline_color || (depth0 != null ? depth0.away_outline_color : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"away_outline_color","hash":{},"data":data}) : helper)))
    + ";\" d=\"M87.9,76.15l-2-17.7c-0.102-0.7-0.301-1.3-0.7-1.8c0.399-0.7,0.399-1.6,0.2-2.4c0-0.1,0-0.1,0-0.2\n									c0-0.2-0.102-0.5-0.102-0.7c-0.1-0.6-0.1-1.1-0.199-1.7c-0.101-0.5-0.101-1-0.199-1.5c0-0.3-0.102-0.6-0.102-0.8\n									c-0.1-0.7-0.3-1.3-0.699-1.8c0.301-0.6,0.399-1.3,0.301-1.9c-1.102-10.1-2.301-19.4-3-24.1C79.7,9.95,67,4.35,59.7,2.05\n									c-1.2-0.4-2.5-0.1-3.4,0.8c-0.2-0.1-0.5-0.2-0.8-0.3c-2.6-0.6-5.6-0.9-9.1-0.9c-4.1,0-7.6,0.4-9.1,0.6c-0.6-0.7-1.6-1.1-2.6-1.1\n									h-0.2c-0.3,0-0.5,0-0.8,0.1c-0.9,0.2-22.2,5.1-24.4,20.2c-0.7,4.7-1.9,14-3,24.1c-0.1,0.7,0.1,1.4,0.4,2c-0.5,0.6-0.8,1.4-0.8,2.2\n									v0.5c0,0.5-0.1,1.1-0.2,1.6c-0.1,0.7-0.2,1.3-0.2,2c0,0.1,0,0.1,0,0.2v0.1c0,0.3-0.1,0.6-0.1,1c0,0.5,0.1,1,0.3,1.5\n									c-0.4,0.5-0.7,1.2-0.8,1.8c-1.1,9.8-2.1,18.5-2.2,19.899c0,0.101,0,0.199,0,0.301v0.199c0,1.199,0.6,2.301,1.6,3\n									c0.5,0.301,4.8,2.899,10,2.899l0,0c2.1,0,4-0.399,5.8-1.3v4.199c0,0.101,0,0.199,0,0.301c0.3,3.1,4,3.898,5.6,4.199\n									c3.9,0.801,10.5,1.199,19.6,1.301l0,0l0,0c9.1,0,15.7-0.5,19.6-1.301c1.6-0.301,5.3-1.101,5.6-4.199c0-0.102,0-0.2,0-0.301V83.35\n									c1.8,0.9,3.8,1.4,6,1.4l0,0c5.1,0,9.5-2.6,10-2.9c1-0.6,1.7-1.8,1.7-3C88.1,78.65,88.1,77.75,87.9,76.15z\"/>\n							</g>\n							<g id=\"main_jersey\">\n								<path class=\"svg_jersey_base\" style=\"fill:"
    + escapeExpression(((helper = (helper = helpers.away_color || (depth0 != null ? depth0.away_color : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"away_color","hash":{},"data":data}) : helper)))
    + ";\" d=\"M8.45,58.85c-1.2,10.101-2.1,18.5-2.2,19.8c0,0.101,0,0.199,0,0.199s7,4.4,12.7,1.301\n									c0-0.199,0.1-0.5,0.1-0.801v-0.1c0-0.2,0.1-0.5,0.1-0.8V78.35l0,0c0.6-4,1.6-11.1,2.6-17.8L8.45,58.85z M9.45,50.45L9.45,50.45\n									c-0.1,1.2-0.3,2.5-0.4,3.7l0,0c0,0.3-0.1,0.699-0.1,1l13.3,1.6c0-0.3,0.1-0.7,0.1-1c0-0.1,0-0.2,0-0.4c0-0.1,0-0.199,0-0.3\n									c0.1-1,0.3-2.1,0.4-3c0-0.2,0.1-0.5,0.1-0.7l-13.4-1.6C9.45,49.95,9.45,50.25,9.45,50.45z M46.45,17.55c0,0,8-4.5,8.3-11.6\n									c-7.7-1.7-17.6-0.1-17.6-0.1C39.45,14.35,46.45,17.55,46.45,17.55z M81.85,53.95c-0.1-1.2-0.299-2.3-0.397-3.5l0,0\n									c0-0.2-0.103-0.5-0.103-0.7l-13.398,1.6l0.1,0.7l0,0c0.2,1.2,0.3,2.4,0.5,3.7l0,0l0.1,1l13.401-1.6\n									C81.951,54.75,81.951,54.35,81.85,53.95z M80.951,46.05c-1.102-9.7-2.301-19.1-3-24c-1.5-10.2-13.901-15-19.301-16.7\n									c0.101,0.1,0.2,0.3,0.2,0.4c0,1-3.8,11.4-12.5,13.3l0.1-0.1l-0.3,0.1h-0.1l0,0c-2.5-0.5-4.6-1.8-6.3-3.3l-0.1-0.1l0,0\n									c-4.2-3.8-6.1-9.2-6.1-9.9c0-0.4,0.6-0.8,1.2-1.1h-0.2c0,0-19.8,4.4-21.7,17.3c-0.7,4.899-1.9,14.3-3,24l13.5,1.6\n									c0.3-2.6,0.6-4.3,0.6-4.3l-0.3,44.4c0,0,0.2,2.199,21.7,2.3l0,0c21.5-0.101,21.7-2.3,21.7-2.3l-0.3-44.4c0,0,0.2,1.7,0.6,4.3\n									L80.951,46.05z M84.451,76.55L84.451,76.55l-2-17.7l-13.301,1.6c0.9,6.7,1.9,13.8,2.601,17.8l0,0v0.1c0,0.2,0.1,0.4,0.1,0.7\n									c0,0.101,0,0.2,0,0.3c0,0.301,0.101,0.5,0.101,0.801c5.6,3.101,12.7-1.301,12.7-1.301S84.65,78.05,84.451,76.55z\"/>\n							</g>\n						</svg>\n						<div class=\"home_or_away\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.away", {"name":"t","hash":{},"data":data})))
    + "</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n\n<div id=\"team_roster_content\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.roster : depth0), {"name":"if","hash":{},"fn":this.program(6, data, depths),"inverse":this.program(28, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"usePartial":true,"useData":true,"useDepths":true});



this["precompiled_templates"]["cards_team_schedule"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.cards_boxscore, '			', 'cards_boxscore', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.empty_page, '			', 'empty_page', depth0, {
    'message': ("No games are currently scheduled. Stay strong.")
  }, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.empty_page, '			', 'empty_page', depth0, {
    'message': ("No games have been played yet.")
  }, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"container\">\n	<div>\n		<div class=\"form-group\">\n			<div class=\"btn-group btn-group-justified\" id=\"team_schedule_tabs_container\">\n				<div class=\"btn-group\">\n					<button type=\"button\" data-tab=\"past\" class=\"js-team-schedule-tab btn btn-default team-schedule-tabs\" id=\"past_schedule_btn\">\n						<div class=\"button_text\">\n							"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "events.past", {"name":"t","hash":{},"data":data})))
    + "\n						</div>\n					</button>\n				</div>\n				<div class=\"btn-group\">\n					<button type=\"button\" data-tab=\"upcoming\" class=\"js-team-schedule-tab btn btn-default team-schedule-tabs\" id=\"upcoming_schedule_btn\">\n						<div class=\"button_text\">\n							"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "events.upcoming", {"name":"t","hash":{},"data":data})))
    + "\n						</div>\n					</button>\n				</div>\n			</div>\n		</div>\n	</div>\n\n	<div id=\"team_schedule_upcoming\">\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.future : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	</div>\n\n	<div id=\"team_schedule_past\">\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.past : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	</div>\n</div>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["cards_team_finder_captain_show"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<article class=\"card\">\n	<div id=\"card_team_finder\" class=\"\">\n		Team Finder -- Captain -- Show\n	</div>\n</article>";
  },"useData":true});



this["precompiled_templates"]["cards_team_finder_matches"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "	<article class=\"card\">\n		<section class=\"about\">\n			<div class=\"profile_pic\">\n				<a href=\"#\">\n					<img class=\"touch\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n				</a>\n			</div>\n			<div class=\"user_info\">\n				<div class=\"name\">\n					<a href=\"#\">\n						"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n					</a>\n				</div>\n				<div class=\"timeago\">\n					<a href=\""
    + escapeExpression(lambda((depth0 != null ? depth0.full_link : depth0), depth0))
    + "\">\n						"
    + escapeExpression(lambda((depth0 != null ? depth0.timeago : depth0), depth0))
    + "\n					</a>\n				</div>\n			</div>\n		</section>\n		<section class=\"main\">\n			";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.team : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.league : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.division : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.season : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.levels : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.positions : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			\n			<p>"
    + escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper)))
    + "</p>\n		</section>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.comments : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		<section class=\"send_comment\">\n			<div class=\"row\">\n				<div class=\"col-xs-12\">\n					<input type=\"text\" placeholder=\"Add your comment\"><!--\n					--><button id=\"submit_comment\" type=\"button\" class=\"btn btn-default\">Send</button>\n				</div>\n			</div>\n		</section>\n	</article>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<p>Team: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<p>League: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>";
},"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<p>Division: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.division : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>";
},"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<p>Season: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.season : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<p>Skill level";
  stack1 = ((helpers.isnt || (depth0 && depth0.isnt) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.levels : depth0)) != null ? stack1.size : stack1), 0, {"name":"isnt","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ":  ";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.levels : depth0), {"name":"each","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</p>";
},"11":function(depth0,helpers,partials,data) {
  return "s";
  },"13":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.level : depth0)) != null ? stack1.name : stack1), depth0))
    + " ";
},"15":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<p>Position";
  stack1 = ((helpers.isnt || (depth0 && depth0.isnt) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.positions : depth0)) != null ? stack1.size : stack1), 0, {"name":"isnt","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ": ";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.positions : depth0), {"name":"each","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</p>";
},"16":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.position : depth0)) != null ? stack1.name : stack1), depth0))
    + " ";
},"18":function(depth0,helpers,partials,data) {
  var stack1, buffer = "		<section class=\"comments\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.comments : depth0), {"name":"each","hash":{},"fn":this.program(19, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</section>\n";
},"19":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "			<div class=\"comment\">\n				<div class=\"profile_pic\">\n					<a href=\"#\">\n						<img class=\"touch\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n					</a>\n				</div>\n				<div class=\"comment_data\">\n					<div class=\"who_said_what\">\n						<div class=\"they_said\">\n							<div class=\"name\">\n								<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_link : stack1), depth0))
    + "\" mobile-href='/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "'>\n									"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n								</a>\n							</div>\n							<div class=\"message\">\n								"
    + escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper)))
    + "\n							</div>\n						</div>\n					</div>\n					<div class=\"timeago\">\n						<a href=\""
    + escapeExpression(lambda((depth0 != null ? depth0.full_link : depth0), depth0))
    + "\">\n							"
    + escapeExpression(lambda((depth0 != null ? depth0.timeago : depth0), depth0))
    + "\n						</a>\n						<div class=\"comment_options\">\n							<span class=\"spacer\"></span>\n							<a href=\"#\">\n								Reply\n							</a>\n							<span class=\"spacer\"></span>\n							<a href=\"/statuses/destroy/92494\" data-status-id=\"92494\" data-confirm=\"Delete your comment?\" data-remote=\"true\">\n								<img alt=\"Trash\" height=\"10\" src=\"/images/icons/trash.png?1394154659\">\n							</a>\n						</div>\n					</div>\n				</div>\n			</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"useData":true});



this["precompiled_templates"]["cards_team_finder_matches_advertise"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<article class=\"card touch\">\n	<a href=\"team-finder\">\n		<section class=\"title\">\n			<h2>You have TeamFinder matches!</h2>\n			<p>These are results from filling out your TeamFinder profile...</p>\n		</section>\n		<section class=\"main\">\n			<p>(pull through images of the players or team logo that they're matched with)</p>\n			<p>There have been more matches found since you last checked. Take a look!</p>\n		</section>\n	</a>\n</article>\n";
  },"useData":true});



this["precompiled_templates"]["cards_team_finder_player_show"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<article class=\"card\">\n	<div id=\"card_team_finder\" class=\"\">\n		Team Finder -- Player -- Show\n	</div>\n</article>";
  },"useData":true});



this["precompiled_templates"]["cards_team_finder_suggestion"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "			<h2>Suggested players for your team</h2>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "			<h2>Suggested teams for you to join</h2>\n";
  },"5":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "			\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.suggestions : depth0), {"name":"each","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "\n\n					<section class=\"about\">\n";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1].team : depths[1]), {"name":"if","hash":{},"fn":this.program(7, data, depths),"inverse":this.program(9, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "					</section>\n\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "						<div class=\"user_info\">\n							<div class=\"profile_pic\">\n								<img src=\""
    + escapeExpression(((helper = (helper = helpers.profile_picture || (depth0 != null ? depth0.profile_picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"profile_picture","hash":{},"data":data}) : helper)))
    + "\">\n							</div>\n							<div class=\"name\">\n								"
    + escapeExpression(((helper = (helper = helpers.full_name || (depth0 != null ? depth0.full_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"full_name","hash":{},"data":data}) : helper)))
    + "\n							</div>\n							<div class=\"extra_info\">\n								"
    + escapeExpression(((helper = (helper = helpers.extra_info || (depth0 != null ? depth0.extra_info : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"extra_info","hash":{},"data":data}) : helper)))
    + "\n							</div>\n						</div>\n";
},"9":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "							<div class=\"team_info\">\n								<div class=\"profile_pic\">\n									<img class=\"touch\" src=\""
    + escapeExpression(((helper = (helper = helpers.profile_picture || (depth0 != null ? depth0.profile_picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"profile_picture","hash":{},"data":data}) : helper)))
    + "\">\n								</div>\n								<div class=\"team_name\">\n									"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\n								</div>\n								<div class=\"extra_info\">\n									"
    + escapeExpression(((helper = (helper = helpers.extra_info || (depth0 != null ? depth0.extra_info : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"extra_info","hash":{},"data":data}) : helper)))
    + "\n								</div>\n							</div>\n";
},"11":function(depth0,helpers,partials,data) {
  return "\n		<p>Sorry we don't have any suggestions for now. Come back later.</p>\n\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n<a class=\"status card\" href=\"/team-finder\" data-status-id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'>\n\n	<section class=\"title\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.team : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.program(3, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</section>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.suggestions : depth0), {"name":"if","hash":{},"fn":this.program(5, data, depths),"inverse":this.program(11, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</a>\n";
},"useData":true,"useDepths":true});



this["precompiled_templates"]["cards_user_career"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<article class=\"card career\">\n			<section class=\"standings\">\n				<table class=\"table\">\n				<thead>\n					<tr class=\"title\">\n						<th colspan=\"999999\">\n							<span class=\"main_title\">\n								\n								<a href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" mobile-href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " hockey team\">\n									\n									<div class=\"profile_pic\">\n										<img src='"
    + escapeExpression(((helper = (helper = helpers.profile_picture || (depth0 != null ? depth0.profile_picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"profile_picture","hash":{},"data":data}) : helper)))
    + "' alt=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " hockey team\">\n									</div>\n\n									<div class=\"text ellipsis\">\n									\n										"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\n										\n									</div>\n\n								 </a> \n							</span>\n						</th>\n					</tr>\n				</thead>\n				<tbody>\n				\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.stats : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n				</tbody>\n\n				</table>\n			</section>\n	</article>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n						<tr>\n							<th>Team</th>\n\n							<th class=\"stats\">GP</th>\n							\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.stats : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.goalie : stack1), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n						</tr>\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.stats : depth0), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"3":function(depth0,helpers,partials,data) {
  return "								<th class=\"stats\">W</th>\n								<th class=\"stats\">GAA</th>\n								<th class=\"hidden-xs hidden-sm stats\">GA</th>\n								<th class=\"hidden-xs hidden-sm stats\">SO</th>\n								<th class=\"stats\">SV%</th>\n";
  },"5":function(depth0,helpers,partials,data) {
  return "								<th class=\"stats\">G</th>\n								<th class=\"stats\">A</th>\n								<th class=\"hidden-xs hidden-sm stats\">PTS</th>\n								<th class=\"hidden-xs hidden-sm stats\">PIM</th>\n								<th class=\"stats\">PPG</th>\n";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "							<tr>\n								<td>\n									<div class=\"team_name\">\n										"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.season : depth0)) != null ? stack1.name : stack1), depth0))
    + " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.division : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n									</div>\n									<div class=\"extra_info\">\n										"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.name : stack1), depth0))
    + " \n									</div>\n								</td>\n								<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.gp || (depth0 != null ? depth0.gp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gp","hash":{},"data":data}) : helper)))
    + "</td>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.goalie : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "								\n							</tr>\n";
},"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "									<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.wins || (depth0 != null ? depth0.wins : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"wins","hash":{},"data":data}) : helper)))
    + "</td>\n									<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.gaa || (depth0 != null ? depth0.gaa : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gaa","hash":{},"data":data}) : helper)))
    + "</td>\n									<td class=\"hidden-xs hidden-sm stats\">"
    + escapeExpression(((helper = (helper = helpers.ga || (depth0 != null ? depth0.ga : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ga","hash":{},"data":data}) : helper)))
    + "</td>\n									<td class=\"hidden-xs hidden-sm stats\">"
    + escapeExpression(((helper = (helper = helpers.so || (depth0 != null ? depth0.so : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"so","hash":{},"data":data}) : helper)))
    + "</td>\n									<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.sv || (depth0 != null ? depth0.sv : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sv","hash":{},"data":data}) : helper)))
    + "</td>\n";
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "									<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.goals || (depth0 != null ? depth0.goals : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"goals","hash":{},"data":data}) : helper)))
    + "</td>\n									<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.assists || (depth0 != null ? depth0.assists : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"assists","hash":{},"data":data}) : helper)))
    + "</td>\n									<td class=\"hidden-xs hidden-sm stats\">"
    + escapeExpression(((helper = (helper = helpers.points || (depth0 != null ? depth0.points : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"points","hash":{},"data":data}) : helper)))
    + "</td>\n									<td class=\"hidden-xs hidden-sm stats\">"
    + escapeExpression(((helper = (helper = helpers.pim || (depth0 != null ? depth0.pim : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pim","hash":{},"data":data}) : helper)))
    + "</td>\n									<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.ppg || (depth0 != null ? depth0.ppg : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ppg","hash":{},"data":data}) : helper)))
    + "</td>\n";
},"12":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "	\n	<div class=\"empty_results\">\n		<i class=\"icon-sad\"></i>\n		Sadly, "
    + escapeExpression(((helper = (helper = helpers.surname || (depth0 != null ? depth0.surname : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"surname","hash":{},"data":data}) : helper)))
    + "'s league isn't using HC.\n		<a href='http://hockey-community.com/league-software' title=\"Hockey League & Tournament Software\">Learn more about the HC League Software.</a>\n	</div>\n\n			<article class=\"card career\">\n				<section class=\"standings\">\n					<table class=\"table\">\n						<thead>\n							<tr>\n								<th>Team</th>\n								<th class=\"stats\">GP</th>\n								<th class=\"stats\">G</th>\n								<th class=\"stats\">A</th>\n								<th class=\"hidden-xs hidden-sm stats\">PTS</th>\n								<th class=\"hidden-xs hidden-sm stats\">PIM</th>\n								<th class=\"stats\">PPG</th>\n							</tr>\n						</thead>\n						<tbody>\n\n							<tr>\n								<td>\n									<a href=\"http://hockey-community.com/league-software\">MISSING TEAM NAME</a>\n								</td>\n								<td class=\"stats\">0</td>\n								<td class=\"stats\">0</td>\n								<td class=\"stats\">0</td>\n								<td class=\"hidden-xs hidden-sm stats\">0</td>\n								<td class=\"hidden-xs hidden-sm stats\">0</td>\n								<td class=\"stats\">0</td>\n							</tr>\n\n						</tbody>\n					</table>\n				</section>\n	</article>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.career : depth0)) != null ? stack1.teams : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});



this["precompiled_templates"]["cards_user_fun_facts"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "		<article class=\"card card_hc_stats\">\n			<div class=\"hc_stat_title_container\">\n				<div class=\"hc_stat_title\">\n					<svg version=\"1.1\" id=\"ribbon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n						 width=\"155.555px\" height=\"36px\" viewBox=\"0 0 155.555 36\" style=\"enable-background:new 0 0 155.555 36;\" xml:space=\"preserve\">\n						<style type=\"text/css\">\n						<![CDATA[\n							.st0{fill:#19A049;}\n							.st1{fill:#FFFFFF;}\n							.st2{fill:none;stroke:#189146;stroke-miterlimit:10;}\n						]]>\n						</style>\n						<g>\n							<polyline class=\"st0\" points=\"155.555,35.976 151.055,31.476 155.555,26.976 151.055,22.476 155.555,17.976 151.055,13.476\n								155.555,8.976 151.055,4.476 155.53,0 0,0 0,36 	\"/>\n							<line class=\"st2\" x1=\"150.778\" y1=\"32.49\" x2=\"1.25\" y2=\"32.49\"/>\n							<line class=\"st2\" x1=\"1.303\" y1=\"3.492\" x2=\"150.831\" y2=\"3.492\"/>\n						</g>\n						<g>\n							<path class=\"st1\" d=\"M22.217,23.428h0.791c0.464,0,0.79,0.063,0.979,0.189c0.188,0.125,0.283,0.334,0.283,0.625\n								c0,0.322-0.083,0.544-0.248,0.667c-0.165,0.122-0.527,0.183-1.085,0.183h-2.583h-0.531c-0.291,0-0.509-0.071-0.655-0.212\n								s-0.218-0.354-0.218-0.637c0-0.307,0.084-0.519,0.254-0.637c0.169-0.118,0.489-0.177,0.961-0.177h0.212V12.801h-0.188\n								c-0.472,0-0.796-0.063-0.973-0.189c-0.177-0.125-0.266-0.346-0.266-0.661c0-0.291,0.073-0.505,0.218-0.643s0.372-0.207,0.678-0.207\n								h0.507h2.465c0.629,0,1.028,0.061,1.197,0.183c0.169,0.122,0.254,0.344,0.254,0.667c0,0.315-0.106,0.535-0.319,0.661\n								c-0.212,0.126-0.613,0.189-1.203,0.189h-0.531v4.104h5.65v-4.104h-0.802c-0.448,0-0.769-0.067-0.961-0.201\n								c-0.193-0.134-0.289-0.35-0.289-0.649c0-0.322,0.088-0.544,0.266-0.667c0.177-0.122,0.611-0.183,1.303-0.183h2.347h0.531\n								c0.283,0,0.497,0.071,0.643,0.212s0.218,0.354,0.218,0.637c0,0.307-0.083,0.525-0.248,0.655s-0.46,0.195-0.885,0.195h-0.283v10.627\n								h0.189c0.472,0,0.794,0.061,0.967,0.183c0.173,0.122,0.259,0.333,0.259,0.631c0,0.322-0.083,0.544-0.248,0.667\n								c-0.165,0.122-0.547,0.183-1.144,0.183h-2.441c-0.637,0-1.042-0.061-1.215-0.183c-0.173-0.122-0.259-0.344-0.259-0.667\n								c0-0.307,0.102-0.519,0.307-0.637c0.205-0.118,0.594-0.177,1.168-0.177h0.578v-4.907h-5.65V23.428z\"/>\n							<path class=\"st1\" d=\"M43.259,11.491c0.079-0.212,0.189-0.361,0.33-0.448c0.142-0.086,0.346-0.129,0.613-0.129\n								c0.291,0,0.496,0.071,0.614,0.212c0.118,0.142,0.177,0.433,0.177,0.873c0,0.771,0.008,1.488,0.023,2.152\n								c0.016,0.665,0.024,0.954,0.024,0.867c0,0.37-0.063,0.619-0.189,0.749c-0.126,0.129-0.35,0.194-0.672,0.194\n								c-0.519,0-0.857-0.369-1.014-1.108c-0.055-0.22-0.099-0.389-0.13-0.507c-0.149-0.59-0.507-1.071-1.073-1.445\n								c-0.566-0.374-1.231-0.561-1.993-0.561c-1.392,0-2.509,0.509-3.35,1.528c-0.841,1.018-1.262,2.384-1.262,4.099\n								s0.426,3.081,1.279,4.099c0.854,1.019,1.98,1.527,3.379,1.527c0.456,0,0.92-0.065,1.392-0.194c0.472-0.13,0.936-0.325,1.392-0.584\n								c0.212-0.11,0.503-0.297,0.873-0.561c0.37-0.263,0.633-0.395,0.791-0.395c0.244,0,0.45,0.081,0.619,0.242\n								c0.169,0.162,0.253,0.36,0.253,0.596s-0.092,0.462-0.277,0.678c-0.185,0.216-0.529,0.482-1.032,0.796\n								c-0.661,0.433-1.325,0.751-1.993,0.955c-0.668,0.205-1.373,0.307-2.111,0.307c-1.942,0-3.546-0.686-4.812-2.058\n								c-1.266-1.372-1.899-3.127-1.899-5.266c0-2.115,0.641-3.873,1.923-5.272c1.281-1.399,2.894-2.1,4.836-2.1\n								c0.519,0,1.047,0.063,1.586,0.189S42.662,11.24,43.259,11.491z\"/>\n							<path class=\"st1\" d=\"M65.08,24.678c-0.04,0.354-0.13,0.599-0.271,0.737c-0.142,0.138-0.366,0.207-0.672,0.207\n								c-0.331,0-0.576-0.097-0.737-0.289c-0.161-0.193-0.253-0.505-0.277-0.938l-0.153-2.736v-0.212c0-0.377,0.073-0.645,0.218-0.802\n								c0.146-0.157,0.387-0.236,0.726-0.236c0.472,0,0.81,0.338,1.014,1.015c0.094,0.338,0.185,0.594,0.271,0.767\n								c0.275,0.55,0.709,0.975,1.303,1.273c0.594,0.299,1.303,0.448,2.129,0.448c1.015,0,1.838-0.24,2.471-0.719\n								c0.633-0.479,0.949-1.093,0.949-1.84c0-0.621-0.194-1.121-0.583-1.498s-0.958-0.621-1.705-0.731l-1.746-0.236\n								c-1.627-0.228-2.815-0.656-3.562-1.286c-0.747-0.629-1.121-1.514-1.121-2.654c0-1.203,0.497-2.213,1.492-3.031\n								c0.995-0.818,2.235-1.227,3.721-1.227c0.433,0,0.889,0.057,1.368,0.171c0.479,0.114,1.022,0.293,1.628,0.537\n								c0.016-0.228,0.078-0.385,0.188-0.472c0.11-0.086,0.299-0.13,0.566-0.13c0.346,0,0.585,0.051,0.719,0.153\n								c0.134,0.103,0.216,0.346,0.248,0.731l0.166,2.465v0.118c0,0.275-0.079,0.489-0.236,0.643s-0.377,0.23-0.66,0.23\n								c-0.417,0-0.739-0.291-0.967-0.873c-0.11-0.331-0.22-0.578-0.33-0.743c-0.26-0.393-0.633-0.696-1.121-0.908\n								c-0.488-0.212-1.042-0.318-1.663-0.318c-0.952,0-1.724,0.236-2.318,0.708s-0.891,1.089-0.891,1.852\n								c0,0.598,0.222,1.069,0.667,1.415c0.444,0.346,1.123,0.582,2.035,0.708l1.887,0.236c1.368,0.181,2.398,0.6,3.09,1.256\n								c0.692,0.657,1.038,1.543,1.038,2.66c0,1.321-0.492,2.38-1.475,3.179c-0.983,0.798-2.296,1.197-3.939,1.197\n								c-0.566,0-1.128-0.067-1.687-0.201C66.302,25.169,65.708,24.961,65.08,24.678z\"/>\n							<path class=\"st1\" d=\"M78.608,15.867c-0.017,0.59-0.085,0.965-0.207,1.126s-0.359,0.242-0.713,0.242\n								c-0.275,0-0.482-0.073-0.619-0.218c-0.138-0.146-0.207-0.359-0.207-0.643c0.016-0.244,0.023-0.429,0.023-0.555l0.118-3.892\n								c0.016-0.291,0.095-0.501,0.236-0.631c0.142-0.13,0.361-0.195,0.66-0.195h10.25c0.299,0,0.519,0.065,0.66,0.195\n								c0.142,0.129,0.217,0.34,0.225,0.631l0.129,3.892c0,0.142,0.004,0.275,0.013,0.401c0.007,0.126,0.012,0.185,0.012,0.177\n								c0,0.283-0.075,0.494-0.225,0.631c-0.149,0.138-0.373,0.207-0.672,0.207c-0.314,0-0.531-0.081-0.649-0.242\n								c-0.117-0.161-0.185-0.537-0.2-1.126l-0.118-3.066h-3.385v10.627h1.816h0.46c0.33,0,0.57,0.065,0.72,0.195\n								c0.149,0.129,0.224,0.336,0.224,0.619c0,0.275-0.07,0.485-0.212,0.631s-0.347,0.218-0.613,0.218h-6.617\n								c-0.268,0-0.472-0.073-0.613-0.218s-0.212-0.355-0.212-0.631c0-0.291,0.076-0.5,0.229-0.625c0.153-0.126,0.415-0.189,0.784-0.189\n								h0.39h1.816V12.801h-3.386L78.608,15.867z\"/>\n							<path class=\"st1\" d=\"M95.688,12.801h-1.723c-0.479,0-0.815-0.065-1.008-0.195c-0.193-0.13-0.289-0.348-0.289-0.655\n								c0-0.322,0.084-0.544,0.254-0.667c0.169-0.122,0.631-0.183,1.386-0.183h3.361c0.433,0,0.726,0.057,0.879,0.171\n								c0.153,0.114,0.293,0.325,0.418,0.631l4.612,11.523h0.2c0.425,0,0.716,0.059,0.873,0.177c0.157,0.118,0.236,0.331,0.236,0.637\n								c0,0.322-0.075,0.544-0.225,0.667c-0.149,0.122-0.429,0.183-0.837,0.183h-3.209c-0.598,0-0.98-0.061-1.149-0.183\n								c-0.169-0.122-0.254-0.344-0.254-0.667c0-0.299,0.093-0.509,0.277-0.631c0.185-0.122,0.532-0.183,1.044-0.183h1.097l-1.144-2.807\n								h-5.992l-1.015,2.807h1.145c0.519,0,0.873,0.061,1.062,0.183c0.188,0.122,0.283,0.333,0.283,0.631c0,0.322-0.085,0.544-0.254,0.667\n								c-0.169,0.122-0.541,0.183-1.114,0.183H91.5c-0.503,0-0.837-0.061-1.003-0.183c-0.165-0.122-0.247-0.344-0.247-0.667\n								c0-0.307,0.082-0.519,0.247-0.637c0.166-0.118,0.484-0.177,0.956-0.177h0.224L95.688,12.801z M95.086,19.052h4.824l-2.536-6.251\n								L95.086,19.052z\"/>\n							<path class=\"st1\" d=\"M107.601,15.867c-0.017,0.59-0.085,0.965-0.207,1.126s-0.359,0.242-0.713,0.242\n								c-0.275,0-0.482-0.073-0.619-0.218c-0.138-0.146-0.207-0.359-0.207-0.643c0.016-0.244,0.023-0.429,0.023-0.555l0.118-3.892\n								c0.016-0.291,0.095-0.501,0.236-0.631c0.142-0.13,0.361-0.195,0.66-0.195h10.25c0.299,0,0.519,0.065,0.66,0.195\n								c0.142,0.129,0.217,0.34,0.225,0.631l0.129,3.892c0,0.142,0.004,0.275,0.013,0.401c0.007,0.126,0.012,0.185,0.012,0.177\n								c0,0.283-0.075,0.494-0.225,0.631c-0.149,0.138-0.373,0.207-0.672,0.207c-0.314,0-0.531-0.081-0.649-0.242\n								c-0.117-0.161-0.185-0.537-0.2-1.126l-0.118-3.066h-3.385v10.627h1.816h0.46c0.33,0,0.57,0.065,0.72,0.195\n								c0.149,0.129,0.224,0.336,0.224,0.619c0,0.275-0.07,0.485-0.212,0.631s-0.347,0.218-0.613,0.218h-6.617\n								c-0.268,0-0.472-0.073-0.613-0.218s-0.212-0.355-0.212-0.631c0-0.291,0.076-0.5,0.229-0.625c0.153-0.126,0.415-0.189,0.784-0.189\n								h0.39h1.816V12.801h-3.386L107.601,15.867z\"/>\n							<path class=\"st1\" d=\"M123.063,24.678c-0.039,0.354-0.13,0.599-0.271,0.737s-0.365,0.207-0.672,0.207\n								c-0.33,0-0.576-0.097-0.737-0.289c-0.161-0.193-0.254-0.505-0.277-0.938l-0.153-2.736v-0.212c0-0.377,0.073-0.645,0.219-0.802\n								c0.145-0.157,0.387-0.236,0.725-0.236c0.473,0,0.811,0.338,1.015,1.015c0.095,0.338,0.185,0.594,0.271,0.767\n								c0.275,0.55,0.709,0.975,1.303,1.273c0.594,0.299,1.304,0.448,2.13,0.448c1.014,0,1.838-0.24,2.471-0.719s0.949-1.093,0.949-1.84\n								c0-0.621-0.194-1.121-0.584-1.498c-0.389-0.377-0.957-0.621-1.704-0.731l-1.745-0.236c-1.628-0.228-2.815-0.656-3.562-1.286\n								c-0.747-0.629-1.12-1.514-1.12-2.654c0-1.203,0.497-2.213,1.491-3.031c0.995-0.818,2.235-1.227,3.722-1.227\n								c0.433,0,0.889,0.057,1.368,0.171c0.479,0.114,1.022,0.293,1.628,0.537c0.016-0.228,0.078-0.385,0.188-0.472s0.299-0.13,0.566-0.13\n								c0.346,0,0.586,0.051,0.72,0.153c0.133,0.103,0.216,0.346,0.247,0.731l0.165,2.465v0.118c0,0.275-0.078,0.489-0.235,0.643\n								s-0.378,0.23-0.661,0.23c-0.417,0-0.739-0.291-0.967-0.873c-0.11-0.331-0.221-0.578-0.33-0.743\n								c-0.26-0.393-0.633-0.696-1.121-0.908c-0.487-0.212-1.042-0.318-1.663-0.318c-0.951,0-1.724,0.236-2.317,0.708\n								s-0.891,1.089-0.891,1.852c0,0.598,0.223,1.069,0.667,1.415c0.443,0.346,1.122,0.582,2.034,0.708l1.888,0.236\n								c1.368,0.181,2.397,0.6,3.09,1.256c0.691,0.657,1.038,1.543,1.038,2.66c0,1.321-0.491,2.38-1.475,3.179\n								c-0.983,0.798-2.296,1.197-3.939,1.197c-0.566,0-1.128-0.067-1.687-0.201S123.692,24.961,123.063,24.678z\"/>\n						</g>\n					</svg>\n				</div>\n			</div>\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.fun_facts : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</article>\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<section class=\"hc_stat\">\n					<i class=\""
    + escapeExpression(((helper = (helper = helpers.class_name || (depth0 != null ? depth0.class_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"class_name","hash":{},"data":data}) : helper)))
    + "\"></i>\n					<div class=\"stat_num\">\n						"
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "\n					</div>\n					<div class=\"stat_text\">\n						"
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "\n					</div>\n				</section>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.fun_facts : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});



this["precompiled_templates"]["cards_user_header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.is || (depth0 && depth0.is) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.background : stack1), "https://s3.amazonaws.com/hc_storage/hc_ressources/stock_photos/hc-player-cover.jpg", {"name":"is","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  return "				<div class=\"upload_cover_prompt\">\n					<div class=\"message\">\n						<i class=\"icon-add-photo\"></i>upload your cover photo\n					</div>\n				</div>\n";
  },"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "				<div class=\"contact\">\n					<a href=\"/messages/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "\" class=\"btn btn-default btn-block\">Message</a>\n				</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"card inset profile_header\">\n	<div id=\"user_cover_photo\" class=\"cover_photo\">\n";
  stack1 = ((helpers.is || (depth0 && depth0.is) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.current_user : depth0)) != null ? stack1.id : stack1), ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), {"name":"is","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "		<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.background : stack1), depth0))
    + "\">\n	</div>\n	<div class=\"pic_and_info\">\n		<div id=\"user_profile_pic\" class=\"profile_pic\">\n			<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n		</div>\n		<div class=\"profile_info\">\n			<div class=\"description\">\n				<div class=\"name\">\n					"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n				</div>\n				<div class=\"meta primary\">\n					<div class=\"flag\">\n						<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.country_flag : stack1), depth0))
    + "\">\n					</div>\n					<div class=\"location\">\n						"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.location : stack1), depth0))
    + "\n					</div>\n				</div>\n				<div class=\"meta bio_line_1\">\n					";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.extended_bio : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n				</div>\n			</div>\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "web", {"name":"ifOs","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n	</div>\n</div>";
},"useData":true});



this["precompiled_templates"]["cards_user_teams"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n	<div class=\"card teams-listing\">\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.teams : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	</div>\n\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<a class=\"team\" mobile-href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " hockey team\">\n					<div class=\"inner-container\">\n						<div class=\"profile_pic\">\n							<img src=\""
    + escapeExpression(((helper = (helper = helpers.profile_picture || (depth0 != null ? depth0.profile_picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"profile_picture","hash":{},"data":data}) : helper)))
    + "\">\n						</div>\n						<div class=\"team_info\">\n							<div class=\"team_name\">\n								"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\n							</div>\n						</div>\n						<div class=\"indicator\">\n							<i class=\"icon-chevron18\"></i>\n						</div>\n					</div>\n				</a>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n	<div class=\"empty_results\">\n		<i class=\"icon-team-finder\"></i>\n		"
    + escapeExpression(((helper = (helper = helpers.surname || (depth0 != null ? depth0.surname : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"surname","hash":{},"data":data}) : helper)))
    + " isn't on any teams yet.\n		<p>Post on the newsfeed to find a team to play on.</p>\n	</div>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.teams : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});



this["precompiled_templates"]["cards_user_notifications"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "		<section class=\"title\">\n			<h3>\n				Notification preferences\n			</h3>\n			Decide if you want HC to notify you on your phone or by email.\n		</section>\n";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n			<div class=\"settings_group\">\n				<div class=\"settings_title\">\n					"
    + escapeExpression(((helper = (helper = helpers.group_name || (depth0 != null ? depth0.group_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"group_name","hash":{},"data":data}) : helper)))
    + "\n				</div>\n				<table class=\"table notification_preferences\">\n					<tr>\n						<th>&nbsp;</th>\n						<th>Phone</th>\n						<th>Email</th>\n					</tr>\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.notifications : depth0), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</table>\n			</div>\n\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n						<tr>\n							<td>\n								"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\n							</td>\n							<td>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.push_notification_id : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "							</td>\n							<td>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.email_notification_id : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n							</td>\n						</tr>\n\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "									<label class=\"material-design\">\n										<input type=\"checkbox\" data-preference-id=\""
    + escapeExpression(((helper = (helper = helpers.push_notification_id || (depth0 != null ? depth0.push_notification_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"push_notification_id","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = ((helpers.is || (depth0 && depth0.is) || helperMissing).call(depth0, (depth0 != null ? depth0.push_notification_value : depth0), 1, {"name":"is","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n										<span class=\"outer\"><span class=\"inner\"></span></span>\n									</label>\n";
},"6":function(depth0,helpers,partials,data) {
  return "checked";
  },"8":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "									<label class=\"material-design\">\n										<input type=\"checkbox\" data-preference-id=\""
    + escapeExpression(((helper = (helper = helpers.email_notification_id || (depth0 != null ? depth0.email_notification_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"email_notification_id","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = ((helpers.is || (depth0 && depth0.is) || helperMissing).call(depth0, (depth0 != null ? depth0.email_notification_value : depth0), 1, {"name":"is","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n										<span class=\"outer\"><span class=\"inner\"></span></span>\n									</label>\n";
},"10":function(depth0,helpers,partials,data) {
  return "		<section class=\"form_actions\">\n			<br>\n			<button type=\"button\" class=\"btn btn-primary btn-block js-save-notifications-preferences\">Update</button>\n			<a href=\"/\" class=\"btn btn-default btn-block\"> Back to the homepage </a>\n		</section>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<div class=\"user_preferences card\">\n\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "web", {"name":"ifOs","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<section>\n\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	</section>\n\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "web", {"name":"ifOs","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</div>";
},"useData":true});



this["precompiled_templates"]["cards_user_preferences"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "						<img src=\""
    + escapeExpression(((helper = (helper = helpers.profile_picture || (depth0 != null ? depth0.profile_picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"profile_picture","hash":{},"data":data}) : helper)))
    + "\">\n";
},"3":function(depth0,helpers,partials,data) {
  return "						&nbsp;&nbsp;<i class=\"icon-add-photo\"></i>\n";
  },"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<div class=\"form-group\">\n					<div class=\"group\">\n						<input type=\"password\" id=\"preferences_password\" autocorrect=\"off\" title=\"Please choose a password of at least 8 characters\" pattern=\".{8,}\" required>\n						<span class=\"highlight\"></span>\n						<span class=\"bar\"></span>\n						<label>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "login.password", {"name":"t","hash":{},"data":data})))
    + "</label>\n					</div>\n				</div>\n				<div class=\"form-group\">\n					<div class=\"group\">\n						<input type=\"password\" title=\"Please make sure that your passwords match.\" data-confirm-for=\"preferences_password\" id=\"preferences_password_confirm\" autocorrect=\"off\" required>\n						<span class=\"highlight\"></span>\n						<span class=\"bar\"></span>\n						<label>Confirm Password</label>\n					</div>\n				</div>\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "				  		\n				  		<input id=\"language_input\" type=\"text\" value=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.first_time_user : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" readonly=\"true\" required/>\n\n				  		<span class=\"highlight\"></span>\n				  		<span class=\"bar\"></span>\n				  		<label>Language</label>\n				  		\n				  		<div class=\"hidden_select\">\n							<select id=\"language_select\" class=\"js-data hidden_select\" name=\"language\">\n								<option value=\"bg\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "bg", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "bg", {"name":"t","hash":{},"data":data})))
    + "</option>\n								<option value=\"nl-be\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "nl-be", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "nl-be", {"name":"t","hash":{},"data":data})))
    + "</option>\n								<option value=\"en-us\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "en-us", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "en-us", {"name":"t","hash":{},"data":data})))
    + "</option>\n								<option value=\"fr-ca\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "fr-ca", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "fr-ca", {"name":"t","hash":{},"data":data})))
    + "</option>\n								<option value=\"de-de\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "de-de", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "de-de", {"name":"t","hash":{},"data":data})))
    + "</option>\n								<option value=\"hu\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "hu", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "hu", {"name":"t","hash":{},"data":data})))
    + "</option>\n								<option value=\"it-it\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "it-it", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "it-it", {"name":"t","hash":{},"data":data})))
    + "</option>\n								<option value=\"ja\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "ja", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "ja", {"name":"t","hash":{},"data":data})))
    + "</option>\n								<option value=\"ko\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "ko", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "ko", {"name":"t","hash":{},"data":data})))
    + "</option>\n								<option value=\"pl\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "pl", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "pl", {"name":"t","hash":{},"data":data})))
    + "</option>\n								<option value=\"ru\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "ru", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "ru", {"name":"t","hash":{},"data":data})))
    + "</option>\n								<option value=\"sk\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "sk", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "sk", {"name":"t","hash":{},"data":data})))
    + "</option>\n								<option value=\"es-mx\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "es-mx", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "es-mx", {"name":"t","hash":{},"data":data})))
    + "</option>\n							</select>\n				  		</div>\n\n";
},"8":function(depth0,helpers,partials,data) {
  return "English";
  },"10":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), {"name":"t","hash":{},"data":data})));
  },"12":function(depth0,helpers,partials,data) {
  return "selected";
  },"14":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n				  		<label>Language</label>\n				  		\n				  		<div class=\"select_container\">\n				  			<select id=\"language_select\" class=\"js-data\" name=\"language\">\n				  				<option value=\"bg\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "bg", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "bg", {"name":"t","hash":{},"data":data})))
    + "</option>\n				  				<option value=\"nl-be\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "nl-be", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "nl-be", {"name":"t","hash":{},"data":data})))
    + "</option>\n				  				<option value=\"en-us\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "en-us", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "en-us", {"name":"t","hash":{},"data":data})))
    + "</option>\n				  				<option value=\"fr-ca\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "fr-ca", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "fr-ca", {"name":"t","hash":{},"data":data})))
    + "</option>\n				  				<option value=\"de-de\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "de-de", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "de-de", {"name":"t","hash":{},"data":data})))
    + "</option>\n				  				<option value=\"hu\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "hu", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "hu", {"name":"t","hash":{},"data":data})))
    + "</option>\n				  				<option value=\"it-it\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "it-it", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "it-it", {"name":"t","hash":{},"data":data})))
    + "</option>\n				  				<option value=\"ja\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "ja", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "ja", {"name":"t","hash":{},"data":data})))
    + "</option>\n				  				<option value=\"ko\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "ko", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "ko", {"name":"t","hash":{},"data":data})))
    + "</option>\n				  				<option value=\"pl\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "pl", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "pl", {"name":"t","hash":{},"data":data})))
    + "</option>\n				  				<option value=\"ru\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "ru", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "ru", {"name":"t","hash":{},"data":data})))
    + "</option>\n				  				<option value=\"sk\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "sk", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "sk", {"name":"t","hash":{},"data":data})))
    + "</option>\n				  				<option value=\"es-mx\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.language : depth0), "==", "es-mx", {"name":"iff","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "es-mx", {"name":"t","hash":{},"data":data})))
    + "</option>\n				  			</select>\n				  		</div>\n\n";
},"16":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "					<section class='attached_photo'>\n						<img src='"
    + escapeExpression(((helper = (helper = helpers.map_url || (depth0 != null ? depth0.map_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"map_url","hash":{},"data":data}) : helper)))
    + "' id='user_preferences_map'>\n					</section>\n";
},"18":function(depth0,helpers,partials,data) {
  return "					<div class=\"input-group\">\n						<button id=\"user_wants_location_detection\" type=\"button\" class=\"btn btn-default btn-block\">Detect my location</button>\n					</div>\n";
  },"20":function(depth0,helpers,partials,data) {
  return "checked";
  },"22":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "			<div class=\"settings_group group_inputs\">\n				<div class=\"settings_title\">\n					Roles\n				</div>\n				<div class=\"form-group\">\n					<div class=\"input-group\">\n						<label class=\"material-design\">\n							<span class=\"radio_label\">Referee</span>\n							<input type=\"checkbox\" class=\"position\" name='position_ids' value=\"5\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 5, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.positions : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n							<span class=\"outer\"><span class=\"inner\"></span></span>\n						</label>\n					</div>\n					<div class=\"input-group\">\n						<label class=\"material-design\">\n							<span class=\"radio_label\">Fan</span>\n							<input type=\"checkbox\" class=\"position\" name='position_ids' value=\"7\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 7, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.positions : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n							<span class=\"outer\"><span class=\"inner\"></span></span>\n						</label>\n					</div>\n					<div class=\"input-group\">\n						<label class=\"material-design\">\n							<span class=\"radio_label\">Coach</span>\n							<input type=\"checkbox\" class=\"position\" name='position_ids' value=\"8\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 8, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.positions : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n							<span class=\"outer\"><span class=\"inner\"></span></span>\n						</label>\n					</div>\n					<div class=\"input-group\">\n						<label class=\"material-design\">\n							<span class=\"radio_label\">Hockey parent</span>\n							<input type=\"checkbox\" class=\"position\" name='position_ids' value=\"9\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 9, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.positions : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n							<span class=\"outer\"><span class=\"inner\"></span></span>\n						</label>\n					</div>\n					<div class=\"input-group\">\n						<label class=\"material-design\">\n							<span class=\"radio_label\">Scorekeeper</span>\n							<input type=\"checkbox\" class=\"position\" name='position_ids' value=\"10\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 10, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.positions : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n							<span class=\"outer\"><span class=\"inner\"></span></span>\n						</label>\n					</div>\n				</div>\n			</div>\n";
},"24":function(depth0,helpers,partials,data) {
  var stack1, buffer = "		<section class=\"main\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.first_time_user : depth0), {"name":"if","hash":{},"fn":this.program(25, data),"inverse":this.program(27, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</section>\n";
},"25":function(depth0,helpers,partials,data) {
  return "				<button type=\"button\" class=\"btn btn-primary btn-block\">Finish registration</button>\n";
  },"27":function(depth0,helpers,partials,data) {
  return "				<button type=\"button\" class=\"btn btn-primary btn-block js-save-preferences\">Update your account</button>\n				<a href=\"/\" class=\"btn btn-default btn-block\">Go back to the homepage</a>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n<div class=\"user_preferences card\">\n	<section>\n		\n		<div id=\"picture_container\" class=\"settings_group\">\n			\n			<form enctype=\"multipart/form-data\" id=\"user_preferences_profile_picture_form\" method='post'>\n				\n				<div id=\"preferences_photo_upload\" class=\"profile_pic\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.profile_picture : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "				</div>\n\n				<input name=\"photo\" size=\"30\" type=\"file\" style=\"display:none\">\n\n";
  stack1 = this.invokePartial(partials.photo_loader, '				', 'photo_loader', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			</form>\n\n		</div>\n\n		<div class=\"settings_group floating_inputs\">\n			<div class=\"form-group\">\n				<div class=\"group\">\n					<input type=\"text\" name=\"surname\" class=\"js-data\" value=\""
    + escapeExpression(((helper = (helper = helpers.surname || (depth0 != null ? depth0.surname : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"surname","hash":{},"data":data}) : helper)))
    + "\" autocapitalize=\"sentences\" autocorrect=\"off\" required>\n					<span class=\"highlight\"></span>\n					<span class=\"bar\"></span>\n					<label>First name</label>\n				</div>\n			</div>\n			<div class=\"form-group\">\n				<div class=\"group\">\n					<input type=\"text\" name=\"name\" class=\"js-data\" value=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" autocapitalize=\"sentences\" autocorrect=\"off\" required>\n					<span class=\"highlight\"></span>\n					<span class=\"bar\"></span>\n					<label>Last name</label>\n				</div>\n			</div>\n			<div class=\"form-group\">\n				<div class=\"group\">\n					<input type=\"email\" name=\"email\" class=\"js-data\" id=\"preferences_email\" title=\"Please enter a valid email.\" value=\""
    + escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper)))
    + "\" autocorrect=\"off\" required>\n					<span class=\"highlight\"></span>\n					<span class=\"bar\"></span>\n					<label>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "email", {"name":"t","hash":{},"data":data})))
    + "</label>\n				</div>\n			</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.first_time_user : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n\n		<div class=\"settings_group floating_inputs\">\n\n			<div class=\"form-group\">\n\n				<div class=\"group relative valid\">\n				  	\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "mobile", {"name":"ifOs","hash":{},"fn":this.program(7, data),"inverse":this.program(14, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "				  	\n				</div>\n\n				<div class=\"group\">\n					<input type=\"text\" name='location' class=\"js-data\" id=\"user_location\" value=\""
    + escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"location","hash":{},"data":data}) : helper)))
    + "\" autocapitalize=\"words\" autocorrect=\"on\" required>\n					<span class=\"highlight\"></span>\n					<span class=\"bar\"></span>\n					<label>Your location (city &amp; country)</label>\n				</div>\n\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "web", {"name":"ifOs","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n					\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.no_geolocation : depth0), {"name":"unless","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			</div>\n\n		</div>\n\n		<div class=\"settings_group\">\n			<div class=\"settings_title\">\n				Gender\n			</div>\n			<div class=\"form-group col-parent\">\n				<div class=\"col-xs-6\">\n					<label class=\"material-design\">\n						<input type=\"radio\" class=\"js-data\" name=\"gender\" value='male' ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.female : depth0), {"name":"unless","hash":{},"fn":this.program(20, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n						<span class=\"outer\"><span class=\"inner\"></span></span><span class=\"radio_label\">Male</span>\n					</label>\n				</div>\n				<div class=\"col-xs-6\">\n					<label class=\"material-design\">\n						<input type=\"radio\" class=\"js-data\" name=\"gender\" value='female' ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.female : depth0), {"name":"if","hash":{},"fn":this.program(20, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n						<span class=\"outer\"><span class=\"inner\"></span></span><span class=\"radio_label\">Female</span>\n					</label>\n				</div>\n			</div>\n		</div>\n		<div class=\"clear\"></div>\n		<div class=\"settings_group group_inputs\">\n			<div class=\"settings_title\">\n				Positions\n			</div>\n			<div class=\"form-group\">\n				<div class=\"input-group\">\n					<label class=\"material-design\">\n						<span class=\"radio_label\">Goalie</span>\n						<input type=\"checkbox\" class=\"js-data\" name=\"goalie\" value=\"goalie\" ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.goalie : depth0), {"name":"if","hash":{},"fn":this.program(20, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n						<span class=\"outer\"><span class=\"inner\"></span></span>\n					</label>\n				</div>\n				<div class=\"input-group\">\n					<label class=\"material-design\">\n						<span class=\"radio_label\">Winger</span>\n						<input type=\"checkbox\" class=\"position\" name=\"position_ids\" value=\"2\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 2, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.positions : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n						<span class=\"outer\"><span class=\"inner\"></span></span>\n					</label>\n				</div>\n				<div class=\"input-group\">\n					<label class=\"material-design\">\n						<span class=\"radio_label\">Centre</span>\n						<input type=\"checkbox\" class=\"position\" name=\"position_ids\" value=\"3\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 3, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.positions : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n						<span class=\"outer\"><span class=\"inner\"></span></span>\n					</label>\n				</div>\n				<div class=\"input-group\">\n					<label class=\"material-design\">\n						<span class=\"radio_label\">Defenceman</span>\n						<input type=\"checkbox\" class=\"position\" name=\"position_ids\" value=\"4\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 4, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.positions : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n						<span class=\"outer\"><span class=\"inner\"></span></span>\n					</label>\n				</div>\n			</div>\n		</div>\n		<div class=\"settings_group group_inputs\">\n			<div class=\"settings_title\">\n				Skill level\n			</div>\n			<div class=\"form-group\">\n				<div class=\"input-group\">\n					<label class=\"material-design\">\n						<span class=\"radio_label\">Beginner</span>\n						<input type=\"checkbox\" class=\"level\" name=\"preferences_ids\" value=\"1\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 1, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.levels : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n						<span class=\"outer\"><span class=\"inner\"></span></span>\n					</label>\n				</div>\n				<div class=\"input-group\">\n					<label class=\"material-design\">\n						<span class=\"radio_label\">Novice</span>\n						<input type=\"checkbox\" class=\"level\" name=\"preferences_ids\" value=\"5\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 5, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.levels : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n						<span class=\"outer\"><span class=\"inner\"></span></span>\n					</label>\n				</div>\n				<div class=\"input-group\">\n					<label class=\"material-design\">\n						<span class=\"radio_label\">Intermediate</span>\n						<input type=\"checkbox\" class=\"level\" name=\"preferences_ids\" value=\"2\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 2, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.levels : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n						<span class=\"outer\"><span class=\"inner\"></span></span>\n					</label>\n				</div>\n				<div class=\"input-group\">\n					<label class=\"material-design\">\n						<span class=\"radio_label\">Advanced</span>\n						<input type=\"checkbox\" class=\"level\" name=\"preferences_ids\" value=\"3\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 3, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.levels : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n						<span class=\"outer\"><span class=\"inner\"></span></span>\n					</label>\n				</div>\n				<div class=\"input-group\">\n					<label class=\"material-design\">\n						<span class=\"radio_label\">Elite</span>\n						<input type=\"checkbox\" class=\"level\" name=\"preferences_ids\" value=\"4\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 4, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.levels : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n						<span class=\"outer\"><span class=\"inner\"></span></span>\n					</label>\n				</div>\n			</div>\n		</div>\n		<div class=\"settings_group group_inputs\">\n			<div class=\"settings_title\">\n				Type of hockey you play\n			</div>\n			<div class=\"form-group\">\n				<div class=\"input-group\">\n					<label class=\"material-design\">\n						<span class=\"radio_label\">Ice hockey</span>\n						<input type=\"checkbox\" class=\"sport\" name='sports_ids' value=\"1\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 1, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.sports : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n						<span class=\"outer\"><span class=\"inner\"></span></span>\n					</label>\n				</div>\n				<div class=\"input-group\">\n					<label class=\"material-design\">\n						<span class=\"radio_label\">Roller hockey</span>\n						<input type=\"checkbox\" class=\"sport\" name='sports_ids' value=\"2\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 2, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.sports : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n						<span class=\"outer\"><span class=\"inner\"></span></span>\n					</label>\n				</div>\n				<div class=\"input-group\">\n					<label class=\"material-design\">\n						<span class=\"radio_label\">Ball hockey</span>\n						<input type=\"checkbox\" class=\"sport\" name='sports_ids' value=\"3\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 3, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.sports : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n						<span class=\"outer\"><span class=\"inner\"></span></span>\n					</label>\n				</div>\n				<div class=\"input-group\">\n					<label class=\"material-design\">\n						<span class=\"radio_label\">Floorball</span>\n						<input type=\"checkbox\" class=\"sport\" name='sports_ids' value=\"5\" "
    + escapeExpression(((helpers.checkedIfFound || (depth0 && depth0.checkedIfFound) || helperMissing).call(depth0, 5, ((stack1 = (depth0 != null ? depth0.preferences : depth0)) != null ? stack1.sports : stack1), {"name":"checkedIfFound","hash":{},"data":data})))
    + ">\n						<span class=\"outer\"><span class=\"inner\"></span></span>\n					</label>\n				</div>\n			</div>\n		</div>\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.first_time_user : depth0), {"name":"unless","hash":{},"fn":this.program(22, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</section>\n	\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "web", {"name":"ifOs","hash":{},"fn":this.program(24, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</div>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["empty_page"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"icon","hash":{},"data":data}) : helper)));
  },"3":function(depth0,helpers,partials,data) {
  return "icon-sad";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"empty_results\">\n	<i class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.icon : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"></i>\n	";
  stack1 = ((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</div>";
},"useData":true});



this["precompiled_templates"]["form_inputs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "	\n	<div class=\"group\">\n		<input type=\"text\" class=\"data\" value=\""
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "\" autocapitalize=\"sentences\" autocorrect=\"off\" required id=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n		<span class=\"highlight\"></span>\n		<span class=\"bar\"></span>\n		<label>"
    + escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + "</label>\n	</div>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "\n";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), "==", "text", {"name":"iff","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});



this["precompiled_templates"]["inbox_content"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, functionType="function", buffer = "\n	<div class=\"conversations\">\n\n			<a mobile-href=\"/messages/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" href=\"/messages/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "\" class=\"conversation"
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, (depth0 != null ? depth0.isread : depth0), " read", " unread", {"name":"ifelse","hash":{},"data":data})))
    + "\" data-username=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "\" data-user-id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n				<div class=\"profile_pic\">\n					<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n				</div>\n				<div class=\"conversation_info\">\n					<div class=\"conversation_meta\">\n						<div class=\"conversation_with ellipsis\">\n							"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n						</div>\n						<div class=\"conversation_date\">\n							"
    + escapeExpression(((helpers.momentSameDay || (depth0 && depth0.momentSameDay) || helperMissing).call(depth0, (depth0 != null ? depth0.created_at : depth0), {"name":"momentSameDay","hash":{},"data":data})))
    + "\n						</div>\n					</div>\n					<div class=\"conversation_snippet ellipsis\">\n						"
    + escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper)))
    + "\n					</div>\n					<div class=\"conversation_status\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.is_sent : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "					</div>\n				</div>\n			</a>\n	</div>\n\n";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "							<i class=\""
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, (depth0 != null ? depth0.recipient_has_read : depth0), "icon-checkmark", "icon-reply", {"name":"ifelse","hash":{},"data":data})))
    + "\"></i>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = this.invokePartial(partials.empty_page, '	', 'empty_page', depth0, {
    'icon': ("icon-inbox"),
    'message': ("You currently have no messages.")
  }, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.messages : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"usePartial":true,"useData":true});



this["precompiled_templates"]["loading"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"loading_container\">\n	<svg class=\"spinner\" width=\"65px\" height=\"65px\" viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\">\n	   <circle class=\"path\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"round\" cx=\"33\" cy=\"33\" r=\"30\"></circle>\n	</svg>\n</div>";
  },"useData":true});



this["precompiled_templates"]["messages_content"] = Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.messages : depth0), {"name":"each","hash":{},"fn":this.program(2, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "		<div class=\"date_time\">\n			"
    + escapeExpression(((helpers.momentCustom || (depth0 && depth0.momentCustom) || helperMissing).call(depth0, (depth0 != null ? depth0.created_at : depth0), {"name":"momentCustom","hash":{},"data":data})))
    + "\n		</div>\n		<div class=\"message_group_container\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.sent : depth0), {"name":"unless","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "			<div class=\"message_group "
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, (depth0 != null ? depth0.sent : depth0), "you", "them", {"name":"ifelse","hash":{},"data":data})))
    + "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.messages : depth0), {"name":"each","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</div>\n		</div>\n";
},"3":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "				<a class=\"profile_pic\" href=\""
    + escapeExpression(lambda(((stack1 = (depths[2] != null ? depths[2].user : depths[2])) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/user/"
    + escapeExpression(lambda(((stack1 = (depths[2] != null ? depths[2].user : depths[2])) != null ? stack1.id : stack1), depth0))
    + "\">\n					<img src=\""
    + escapeExpression(lambda(((stack1 = (depths[2] != null ? depths[2].user : depths[2])) != null ? stack1.profile_picture : stack1), depth0))
    + "\" class=\"touch\">\n				</a>\n";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "					<div class=\"message\">"
    + escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.empty_page, '	', 'empty_page', depth0, {
    'icon': ("icon-send-mssg"),
    'message': ("Send a message to say hello!")
  }, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.messages : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.program(7, data, depths),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"usePartial":true,"useData":true,"useDepths":true});



this["precompiled_templates"]["notifications_content"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n	<div class=\"notifications\">\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.notifications : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	</div>\n\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", lambda=this.lambda, buffer = "\n			<a class=\"notification "
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, (depth0 != null ? depth0.isread : depth0), "read", "unread", {"name":"ifelse","hash":{},"data":data})))
    + "\" mobile-href=\""
    + escapeExpression(((helper = (helper = helpers.mobile_link || (depth0 != null ? depth0.mobile_link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"mobile_link","hash":{},"data":data}) : helper)))
    + "\" href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\">\n				<div class=\"profile_pic\">\n					<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.emitter : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n				</div>\n				<div class=\"information_block\">\n					<div class=\"information\">\n						";
  stack1 = ((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n					<div class=\"status_block\">\n						"
    + escapeExpression(((helpers.momentAgo || (depth0 && depth0.momentAgo) || helperMissing).call(depth0, (depth0 != null ? depth0.created_at : depth0), {"name":"momentAgo","hash":{},"data":data})))
    + "\n					</div>\n				</div>\n			</a>\n\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = this.invokePartial(partials.empty_page, '	', 'empty_page', depth0, {
    'icon': ("icon-notification"),
    'message': ("You don't have any notifications yet. Come back soon.")
  }, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.notifications : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"usePartial":true,"useData":true});



this["precompiled_templates"]["photo_loader"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<svg>\n  <defs>\n    <clipPath id=\"mask2\" x=\"0\" y=\"0\" width=\"100\" height=\"100\" >\n      <path id=\"pic_upload_path\" width=\"100\" height=\"100\"/>\n    </clipPath>\n    <pattern width=\"50\" height=\"50\" id=\"pic_load_pattern\" patternUnits=\"userSpaceOnUse\"></pattern>\n  </defs>\n  <rect x=\"1\" y=\"1\" width=\"50\" height=\"50\" style=\"stroke: none; fill: url(#pic_load_pattern); clip-path: url(#mask2)\"/>\n</svg>";
},"useData":true});



this["precompiled_templates"]["player_search_results"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = this.invokePartial(partials.users_about, '	', 'users_about', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"usePartial":true,"useData":true});



this["precompiled_templates"]["search_results"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.players : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.teams : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		<div class='clear'></div>\n\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n			<ul class=\"expandable\">\n				<span class=\"group\">\n					"
    + escapeExpression(((helpers.length || (depth0 && depth0.length) || helperMissing).call(depth0, (depth0 != null ? depth0.players : depth0), {"name":"length","hash":{},"data":data})))
    + " PLAYERS\n\n";
  stack1 = ((helpers.compareArray || (depth0 && depth0.compareArray) || helperMissing).call(depth0, (depth0 != null ? depth0.players : depth0), "gt", 3, {"name":"compareArray","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "				</span>\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.players : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n			</ul>\n			<div class=\"clear\"></div>\n";
},"3":function(depth0,helpers,partials,data) {
  return "						<a mobile-href=\"/menu_open/\" class=\"closed\">\n							<span class=\"text\">more</span>\n							<i class=\"icon-arrow-down2\"></i>\n						</a>\n";
  },"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "						<li>\n							<a mobile-href=\"/user/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n								<div class=\"menu_icon\" style=\"background-image:url("
    + escapeExpression(((helper = (helper = helpers.profile_picture || (depth0 != null ? depth0.profile_picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"profile_picture","hash":{},"data":data}) : helper)))
    + ");\"></div>\n								<span>"
    + escapeExpression(((helper = (helper = helpers.full_name || (depth0 != null ? depth0.full_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"full_name","hash":{},"data":data}) : helper)))
    + "</span>\n								<i class=\"icon-chevron18 second-icon\"></i></a>\n						</li>\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "			<ul class=\"expandable\">\n				<span class=\"group\">"
    + escapeExpression(((helpers.length || (depth0 && depth0.length) || helperMissing).call(depth0, (depth0 != null ? depth0.teams : depth0), {"name":"length","hash":{},"data":data})))
    + " TEAMS\n\n";
  stack1 = ((helpers.compareArray || (depth0 && depth0.compareArray) || helperMissing).call(depth0, (depth0 != null ? depth0.teams : depth0), "gt", 3, {"name":"compareArray","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n				</span>\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.teams : depth0), {"name":"each","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n			</ul>\n";
},"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "					<li>\n						<a mobile-href=\"/team/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n							<div class=\"menu_icon\" style=\"background-image:url("
    + escapeExpression(((helper = (helper = helpers.profile_picture || (depth0 != null ? depth0.profile_picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"profile_picture","hash":{},"data":data}) : helper)))
    + ");\"></div>\n							<span>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n							<i class=\"icon-chevron18 second-icon\"></i>\n						</a>\n					</li>\n";
},"10":function(depth0,helpers,partials,data) {
  return "		<ul class=\"expandable\">\n			<span class=\"group\">\n				NO RESULTS\n			</span>\n		</ul>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<li>\n";
  stack1 = ((helpers.checkArrays || (depth0 && depth0.checkArrays) || helperMissing).call(depth0, (depth0 != null ? depth0.teams : depth0), (depth0 != null ? depth0.players : depth0), {"name":"checkArrays","hash":{},"fn":this.program(1, data),"inverse":this.program(10, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</li>";
},"useData":true});



this["precompiled_templates"]["side_menu"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.loading, '			', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "					<li "
    + escapeExpression(((helpers.currentPage || (depth0 && depth0.currentPage) || helperMissing).call(depth0, "/newsfeed", {"name":"currentPage","hash":{},"data":data})))
    + ">\n						<a href=\"/newsfeed\" data-filter=\"home\" mobile-href=\"/newsfeed\">\n							<i class=\"icon-home first-icon\"></i>\n							<span>Home</span>\n							<i class=\"icon-chevron18 second-icon\"></i>\n						</a>\n					</li>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "									<small>\n										("
    + escapeExpression(((helpers.inflect || (depth0 && depth0.inflect) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.current_user : depth0)) != null ? stack1.credits : stack1), "credit", "credits", true, {"name":"inflect","hash":{},"data":data})))
    + ")\n									</small>\n";
},"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "					<li "
    + escapeExpression(((helpers.currentPage || (depth0 && depth0.currentPage) || helperMissing).call(depth0, "/team-finder", {"name":"currentPage","hash":{},"data":data})))
    + ">\n						<a href=\"/team-finder\" data-team-id=\"2067\">\n							<div class=\"menu_icon team_finder_menu_icon\"></div>\n							<span>Team Finder</span>\n							<i class=\"icon-chevron18 second-icon\"></i>\n						</a>\n					</li>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "mobile", {"name":"ifOs","hash":{},"fn":this.program(10, data),"inverse":this.program(14, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "\n";
  stack1 = ((helpers.any || (depth0 && depth0.any) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.current_user : depth0)) != null ? stack1.favourite_teams : stack1), {"name":"any","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n					<li>\n						<ul>\n							<span class=\"group\">\n								"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams", {"name":"t","hash":{},"data":data})))
    + "\n							</span>\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.current_user : depth0)) != null ? stack1.favourite_teams : stack1), {"name":"each","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n						</ul>\n					</li>\n\n";
},"12":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "								<li>\n									<a href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" data-team-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" mobile-href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\">\n									<div class=\"menu_icon\" style=\"background-image:url("
    + escapeExpression(((helper = (helper = helpers.profile_picture || (depth0 != null ? depth0.profile_picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"profile_picture","hash":{},"data":data}) : helper)))
    + ");\"></div>\n									<span>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n									<i class=\"icon-chevron18 second-icon\"></i></a>\n								</li>\n";
},"14":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n				<li>\n					<ul>\n						<span class=\"group\">\n							"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams", {"name":"t","hash":{},"data":data})))
    + "\n						</span>\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.current_user : depth0)) != null ? stack1.favourite_teams : stack1), {"name":"each","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n						<li>\n							<a href=\"/teams/new\"><span>Add a team</span><i class=\"icon-chevron18 second-icon\"></i></a>\n						</li>\n\n					</ul>\n				</li>\n\n\n\n";
},"15":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "							<li>\n								<a href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" data-team-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" mobile-href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\">\n								<div class=\"menu_icon\" style=\"background-image:url("
    + escapeExpression(((helper = (helper = helpers.profile_picture || (depth0 != null ? depth0.profile_picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"profile_picture","hash":{},"data":data}) : helper)))
    + ");\"></div>\n								<span>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n								<i class=\"icon-chevron18 second-icon\"></i></a>\n							</li>\n";
},"17":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.current_user : depth0)) != null ? stack1.leagues : stack1), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"18":function(depth0,helpers,partials,data) {
  var stack1, buffer = "			<!--  Leagues  -->\n			<li>\n				<ul>\n					<span class=\"group\">Leagues</span>\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.current_user : depth0)) != null ? stack1.leagues : stack1), {"name":"each","hash":{},"fn":this.program(19, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</ul>\n			</li>\n";
},"19":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "					<li>\n						<a href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\" data-league-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n						<div class=\"menu_icon\" style=\"background-image:url("
    + escapeExpression(((helper = (helper = helpers.profile_picture || (depth0 != null ? depth0.profile_picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"profile_picture","hash":{},"data":data}) : helper)))
    + ");\"></div>\n						<span class=\"league_name ellipsis\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n						<i class=\"icon-chevron18 second-icon\"></i></a>\n					</li>\n";
},"21":function(depth0,helpers,partials,data) {
  var stack1, buffer = "	<li>\n		<ul class=\"main_links\">\n			<span class=\"group\">Admin</span>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.league : depth0), {"name":"if","hash":{},"fn":this.program(22, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.is_manager : depth0), {"name":"if","hash":{},"fn":this.program(24, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.admin : depth0), {"name":"if","hash":{},"fn":this.program(26, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n		</ul>\n	</li>\n";
},"22":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "			<li "
    + escapeExpression(((helpers.currentPage || (depth0 && depth0.currentPage) || helperMissing).call(depth0, "/leagues/", {"name":"currentPage","hash":{},"data":data})))
    + ">\n				<a href=\"/leagues/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.slug : stack1), depth0))
    + "/manage\">\n					<i class=\"fa-table first-icon\"></i>\n					<span>League admin</span>\n					<i class=\"icon-chevron18 second-icon\"></i>\n				</a>\n			</li>\n";
},"24":function(depth0,helpers,partials,data) {
  return "			<li>\n				<a href=\"/rink_manager/menu\">\n					<i class=\"fa-map-marker first-icon\"></i>\n					<span>Arena admin</span>\n					<i class=\"icon-chevron18 second-icon\"></i>\n				</a>\n			</li>\n";
  },"26":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n			<li "
    + escapeExpression(((helpers.currentPage || (depth0 && depth0.currentPage) || helperMissing).call(depth0, "/admin", {"name":"currentPage","hash":{},"data":data})))
    + ">\n				<a href=\"/admin\">\n					<i class=\"fa-lock first-icon\"></i>\n					<span>Admin panel</span>\n					<i class=\"icon-chevron18 second-icon\"></i>\n				</a>\n			</li>\n\n";
},"28":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "		<li>\n			<ul class=\"main_links\">\n				<span class=\"group\">YOUR STORY</span>\n				<li "
    + escapeExpression(((helpers.currentPage || (depth0 && depth0.currentPage) || helperMissing).call(depth0, "/settings/event_history", {"name":"currentPage","hash":{},"data":data})))
    + ">\n					<a href=\"/settings/event_history\">\n						<i class=\"fa-file-o first-icon\"></i>\n						<span>Event history</span>\n						<i class=\"icon-chevron18 second-icon\"></i>\n					</a>\n				</li>\n				<li "
    + escapeExpression(((helpers.currentPage || (depth0 && depth0.currentPage) || helperMissing).call(depth0, "/infographic/", {"name":"currentPage","hash":{},"data":data})))
    + ">\n					<a href=\"/infographic/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.current_user : depth0)) != null ? stack1.username : stack1), depth0))
    + "\">\n						<i class=\"fa-bar-chart-o first-icon\"></i>\n						<span>Infographic</span>\n						<i class=\"icon-chevron18 second-icon\"></i>\n					</a>\n				</li>\n			</ul>\n		</li>\n";
},"30":function(depth0,helpers,partials,data) {
  return " style=\"display:none;\"";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, functionType="function", blockHelperMissing=helpers.blockHelperMissing, buffer = "<ul id=\"menu\">\n	<li>\n		<ul class=\"user\">\n			<li>\n				<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.current_user : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.current_user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n					<div class=\"left\">\n						<img id=\"user_menu_image\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.current_user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\" class=\"touch\">\n					</div>\n					<div class=\"middle\">\n						<span class=\"name ellipsis\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.current_user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "</span>\n						<span class=\"location ellipsis\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.current_user : depth0)) != null ? stack1.location : stack1), depth0))
    + "</span>\n					</div>\n					<div class=\"right\">\n						<i class=\"icon-chevron19 second-icon\"></i>\n					</div>\n				</a>\n			</li>\n		</ul>\n		<ul class=\"search\">\n			<i class=\"icon-search\"></i> <input type=\"text\" placeholder=\""
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "search", {"name":"t","hash":{},"data":data})))
    + "\" id=\"graph_search_input\"><button id=\"clear_search\" type=\"button\"><i class=\"icon-close-circle\"></i></button>\n		</ul>\n	</li>\n\n	<div id=\"search_display\" class=\"hide\" data-loading=\"true\">\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "mobile", {"name":"ifOs","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</div>\n\n	<div id=\"sidemenu_content\" class="
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, (depth0 != null ? depth0.side_menu : depth0), "hide", "show", {"name":"ifelse","hash":{},"data":data})))
    + ">\n		<li>\n			<ul id=\"community_sections\" class=\"main_links\">\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "web", {"name":"ifOs","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "				<li "
    + escapeExpression(((helpers.currentPage || (depth0 && depth0.currentPage) || helperMissing).call(depth0, "/events", {"name":"currentPage","hash":{},"data":data})))
    + ">\n					<a href=\"/events\" mobile-href=\"/events\" data-filter=\"events\">\n						<div class=\"icon-calendar first-icon\"></div>\n\n\n							<span>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "events", {"name":"t","hash":{},"data":data})))
    + "\n\n";
  stack1 = ((helpers.gt || (depth0 && depth0.gt) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.current_user : depth0)) != null ? stack1.credits : stack1), 0, {"name":"gt","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n							</span>\n\n						<i class=\"icon-chevron18 second-icon\"></i>\n					</a>\n				</li>\n\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "web", {"name":"ifOs","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			</ul>\n		</li>\n		<!--  Teams  -->\n";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.current_user : depth0)) != null ? stack1.league : stack1), {"name":"unless","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "web", {"name":"ifOs","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<!-- Support -->\n	<li>\n		<ul id=\"community_sections\" class=\"main_links\">\n			<span class=\"group\">SUPPORT</span>\n			<li>\n				<a href=\"http://help.hockey-community.com\" target=\"_blank\">\n					<i class=\"icon-question-solid first-icon\"></i>\n					<span>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "helpdesk", {"name":"t","hash":{},"data":data})))
    + "</span>\n					<i class=\"icon-chevron18 second-icon\"></i>\n				</a>\n			</li>\n		</ul>\n	</li>\n\n";
  stack1 = ((helper = (helper = helpers.adminSection || (depth0 != null ? depth0.adminSection : depth0)) != null ? helper : helperMissing),(options={"name":"adminSection","hash":{},"fn":this.program(21, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.adminSection) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</div> <!-- end sidemenu_content -->\n\n	<div id=\"settings_content\" class="
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, (depth0 != null ? depth0.side_menu : depth0), "show", "hide", {"name":"ifelse","hash":{},"data":data})))
    + ">\n		<li>\n			<ul class=\"main_links\">\n				<span class=\"group\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "settings", {"name":"t","hash":{},"data":data})))
    + "</span>\n\n				<li >\n					<a mobile-href=\"/preferences\" href=\"/settings/profile\">\n						<i class=\"icon-preferences first-icon\"></i>\n						<span>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "your_account", {"name":"t","hash":{},"data":data})))
    + "</span>\n						<i class=\"icon-chevron18 second-icon\"></i>\n					</a>\n				</li>\n\n				<li "
    + escapeExpression(((helpers.currentPage || (depth0 && depth0.currentPage) || helperMissing).call(depth0, "/settings/notifications", {"name":"currentPage","hash":{},"data":data})))
    + ">\n					<a mobile-href=\"/preferences_notifications\" href=\"/settings/notifications\">\n						<i class=\"icon-notification-settings first-icon\"></i>\n						<span>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "notifications", {"name":"t","hash":{},"data":data})))
    + "</span>\n						<i class=\"icon-chevron18 second-icon\"></i>\n					</a>\n				</li>\n\n			</ul>\n		</li>\n\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "web", {"name":"ifOs","hash":{},"fn":this.program(28, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</div> <!-- end settings_content -->\n</ul>\n<li>\n	<ul class=\"small-links\">\n		<li class=\"left\">\n			<a href=\"/settings\" mobile-href=\"/settings/settings\" id=\"settings_button\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.side_menu : depth0), {"name":"if","hash":{},"fn":this.program(30, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n				<i class=\"icon-settings1 first-icon\"></i>&nbsp;&nbsp;"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "settings", {"name":"t","hash":{},"data":data})))
    + "\n			</a>\n			<a href=\"/newsfeed\" mobile-href=\"/settings/back\" id=\"back_to_menu_button\"";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.side_menu : depth0), {"name":"unless","hash":{},"fn":this.program(30, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n				<i class=\"icon-arrow-left first-icon\"></i>&nbsp;"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "back_to_menu", {"name":"t","hash":{},"data":data})))
    + "\n			</a>\n		</li><li class=\"right\">\n			<a mobile-href=\"/sessions/destroy\" href=\"/sessions/destroy\">\n				<i class=\"icon-exit first-icon\"></i>&nbsp;&nbsp;"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "log_out", {"name":"t","hash":{},"data":data})))
    + "\n			</a>\n		</li>\n	</ul>\n</li>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["status_comment"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"comment\">\n	<div class=\"profile_pic\">\n		<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href='/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "'>\n			<img class=\"touch\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n		</a>\n	</div>\n\n	<div class=\"comment_data\">\n		<div class=\"who_said_what\">\n			<div class=\"they_said\">\n				<div class=\"name\">\n					<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href='/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "'>\n						"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n					</a>\n				</div>\n				<div class=\"message\">\n					";
  stack1 = ((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n				</div>\n			</div>\n		</div>\n		<div class=\"timeago\">\n\n			<a>\n				<span>"
    + escapeExpression(((helpers.moment || (depth0 && depth0.moment) || helperMissing).call(depth0, (depth0 != null ? depth0.created_at : depth0), {"name":"moment","hash":{},"data":data})))
    + "</span> - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.location : stack1), depth0))
    + "\n			</a>\n\n			<div class=\"comment_options\">\n				";
  stack1 = ((helpers.check_global || (depth0 && depth0.check_global) || helperMissing).call(depth0, 0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), {"name":"check_global","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n\n\n			</div>\n		</div>\n	</div>\n</div>";
},"useData":true});



this["precompiled_templates"]["status_comments"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.status_comment, '	', 'status_comment', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.comments : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"usePartial":true,"useData":true});



this["precompiled_templates"]["teams_edit_roster"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "		<section class=\"title\">\n\n			<i class=\"icon-close-lrg js-close-popup\"></i>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.player : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n		</section>\n";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<h3>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.edit_player", {"name":"t","hash":{},"data":data})))
    + "</h3>\n";
},"4":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<h3>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.add_player", {"name":"t","hash":{},"data":data})))
    + "</h3>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "\n		<div class=\"hide\">\n			<input name=\"email\" id=\"edit_roster_email_input\" class=\"data\" type=\"email\" title=\"Please type in the players email, or use the name field to search.\"/>\n			<input name=\"name\" id=\"edit_roster_full_name_input\" class=\"data\" type=\"text\" title=\"Please type in the players full name\"/>\n			<input name=\"user_id\" type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"/>\n			<input name=\"membership_id\" type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.membership_id : stack1), depth0))
    + "\"/>\n		</div>\n\n";
  stack1 = this.invokePartial(partials.users_about, '		', 'users_about', (depth0 != null ? depth0.player : depth0), undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n		<div id=\"edit_roster_main_options\" class=\"collapsable\">\n			\n			<div class=\"group\">\n				<input name=\"name\" id=\"edit_roster_full_name_input\" class=\"data\" type=\"text\" title=\"Please type in the players full name\" required/>\n				<span class=\"highlight\"></span>\n				<span class=\"bar\"></span>\n				<label>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "full_name", {"name":"t","hash":{},"data":data})))
    + "</label>\n			</div>\n\n			<div class=\"group\">\n				<input name=\"email\" id=\"edit_roster_email_input\" class=\"data\" type=\"email\" title=\"Please type in the players email, or use the name field to search.\" required/>\n				<span class=\"highlight\"></span>\n				<span class=\"bar\"></span>\n				<label>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "email", {"name":"t","hash":{},"data":data})))
    + "</label>\n			</div>\n\n		</div>\n\n		<div id=\"edit_roster_player_found\"></div>\n		<div id=\"edit_roster_search_results\" class='search-results collapsable'></div>\n		\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "			\n			<input name=\"position\" id=\"position_input\" class=\"data\" type=\"text\" data-position=\""
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, (depth0 != null ? depth0.player : depth0), ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.position : stack1), "Centre", {"name":"ifelse","hash":{},"data":data})))
    + "\" value=\""
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, (depth0 != null ? depth0.player : depth0), ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.position : stack1), "Centre", {"name":"ifelse","hash":{},"data":data})))
    + "\" readonly=\"true\" required/>\n		  	<span class=\"highlight\"></span>\n		  	<span class=\"bar\"></span>\n		  	<label>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "position", {"name":"t","hash":{},"data":data})))
    + "</label>\n			\n			<div class=\"hidden_select\">\n				<select id=\"position_select\" class=\"hidden_select\" name=\"position\">\n			  		<option value=\"Left Wing\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.position : stack1), "==", "Left Wing", {"name":"iff","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.left_wing", {"name":"t","hash":{},"data":data})))
    + "</option>\n			  		<option value=\"Centre\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.position : stack1), "==", "Centre", {"name":"iff","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.center", {"name":"t","hash":{},"data":data})))
    + "</option>\n			  		<option value=\"Right Wing\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.position : stack1), "==", "Right Wing", {"name":"iff","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.right_wing", {"name":"t","hash":{},"data":data})))
    + "</option>\n			  		<option value=\"Left Defence\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.position : stack1), "==", "Left Wing", {"name":"iff","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.left_defence", {"name":"t","hash":{},"data":data})))
    + "</option>\n			  		<option value=\"Right Defence\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.position : stack1), "==", "Right Defence", {"name":"iff","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.right_defence", {"name":"t","hash":{},"data":data})))
    + "</option>\n			  		<option value=\"Goalie\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.position : stack1), "==", "Goalie", {"name":"iff","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.goalie", {"name":"t","hash":{},"data":data})))
    + "</option>\n				</select>\n			</div>\n\n";
},"11":function(depth0,helpers,partials,data) {
  return "selected";
  },"13":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n			<label>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "position", {"name":"t","hash":{},"data":data})))
    + "</label>\n			\n			<div class='select_container'>\n				<select id=\"position_select\" class=\"hidden_select\" name=\"position\">\n					<option value=\"Left Wing\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.position : stack1), "==", "Left Wing", {"name":"iff","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.left_wing", {"name":"t","hash":{},"data":data})))
    + "</option>\n 			  		<option value=\"Centre\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.position : stack1), "==", "Centre", {"name":"iff","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.center", {"name":"t","hash":{},"data":data})))
    + "</option>\n 			  		<option value=\"Right Wing\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.position : stack1), "==", "Right Wing", {"name":"iff","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.right_wing", {"name":"t","hash":{},"data":data})))
    + "</option>\n 			  		<option value=\"Left Defence\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.position : stack1), "==", "Left Wing", {"name":"iff","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.left_defence", {"name":"t","hash":{},"data":data})))
    + "</option>\n 			  		<option value=\"Right Defence\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.position : stack1), "==", "Right Defence", {"name":"iff","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.right_defence", {"name":"t","hash":{},"data":data})))
    + "</option>\n 			  		<option value=\"Goalie\" ";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.position : stack1), "==", "Goalie", {"name":"iff","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.goalie", {"name":"t","hash":{},"data":data})))
    + "</option>\n				</select>\n			</div>\n\n";
},"15":function(depth0,helpers,partials,data) {
  return " checked ";
  },"17":function(depth0,helpers,partials,data) {
  return "\n		<div class=\"clear\"></div>\n		<section class=\"main\">\n\n			<button type=\"submit\" class=\"btn btn-primary btn-block js-submit-roster\">Update</button>\n\n		</section>\n		\n";
  },"19":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "\n		<button type=\"button\" id=\"delete_player\" class=\"btn btn-danger btn-block js-remove-player\" data-position=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.position : stack1), depth0))
    + "\" data-membership-id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.membership_id : stack1), depth0))
    + "\">Remove player</button>\n		\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<form id=\"edit_roster_form\">\n\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "web", {"name":"ifOs","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<div class=\"floating_inputs\">\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.player : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<div class=\"group relative valid\">\n\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "mobile", {"name":"ifOs","hash":{},"fn":this.program(10, data),"inverse":this.program(13, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</div>\n\n	<div class=\"group\">\n		<input id=\"jersey_number\" type=\"number\" pattern=\"[0-9]{1,3}\" class=\"data\" name=\"number\" min=\"0\" max=\"999\" value=\""
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, (depth0 != null ? depth0.player : depth0), ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.number : stack1), "", {"name":"ifelse","hash":{},"data":data})))
    + "\" title=\"Please enter the player's number from 0-99\" required/>\n		<span class=\"highlight\"></span>\n		<span class=\"bar\"></span>\n		<label>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.jersey_number", {"name":"t","hash":{},"data":data})))
    + "*</label>\n	</div>\n\n	<div class=\"settings_group\">\n		<div class=\"settings_title\">\n			"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.leadership_role", {"name":"t","hash":{},"data":data})))
    + "\n		</div>\n		\n		<div class=\"clear\"></div>\n		<div class=\"form-group col-parent\">\n			<div class=\"col-xs-6\">\n				<label class=\"material-design\">\n				  <input id=\"edit_roster_captain\" type=\"radio\" name=\"captain\" value=\"C\">\n				  <span class=\"outer\"><span class=\"inner\"></span></span><span class=\"radio_label\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.captain", {"name":"t","hash":{},"data":data})))
    + "</span>\n				</label>\n			</div>\n			<div class=\"col-xs-6\">\n				<label class=\"material-design\">\n				  <input id=\"edit_roster_alt_captain\" type=\"radio\" name=\"captain\" value=\"A\">\n				  <span class=\"outer\"><span class=\"inner\"></span></span><span class=\"radio_label\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.alternate", {"name":"t","hash":{},"data":data})))
    + "</span>\n				</label>\n			</div>\n		</div>\n		<div class=\"clear\"></div>\n	</div>\n\n	<div class=\"settings_group\">\n		<div class=\"settings_title\">\n			"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.roster_status", {"name":"t","hash":{},"data":data})))
    + "\n		</div>\n		\n		<div class=\"clear\"></div>\n		<div class=\"form-group col-parent\">\n			<div class=\"col-xs-6\">\n				<label class=\"material-design\">\n				  <input type=\"radio\" name=\"roster_status\" value='spare' "
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.spare : stack1), "", "checked", {"name":"ifelse","hash":{},"data":data})))
    + ">\n				  <span class=\"outer\"><span class=\"inner\"></span></span><span class=\"radio_label\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.full_time", {"name":"t","hash":{},"data":data})))
    + "</span>\n				</label>\n			</div>\n			<div class=\"col-xs-6\">\n				<label class=\"material-design\">\n				  <input type=\"radio\" name=\"roster_status\" value='full_time' "
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.spare : stack1), "checked", "", {"name":"ifelse","hash":{},"data":data})))
    + ">\n				  <span class=\"outer\"><span class=\"inner\"></span></span><span class=\"radio_label\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.spare", {"name":"t","hash":{},"data":data})))
    + "</span>\n				</label>\n			</div>\n		</div>\n		<div class=\"clear\"></div>\n\n	</div>\n\n	<div class=\"settings_group\">\n		<div class=\"settings_title\">\n			RSVP OPTION\n		</div>\n		\n		<div class=\"clear\"></div>\n		<div class=\"form-group\">\n		\n			<label class=\"material-design\">\n			  <input type=\"checkbox\" name=\"rsvp\" value='true' ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.rsvp : stack1), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n			  <span class=\"outer\"><span class=\"inner\"></span></span>\n			  <span class=\"radio_label\">Automatically signed in for each game</span>\n			</label>\n\n		</div>\n		<div class=\"clear\"></div>\n\n	</div>\n\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "web", {"name":"ifOs","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.can_remove_players : stack1), "&&", (depth0 != null ? depth0.player : depth0), {"name":"iff","hash":{},"fn":this.program(19, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	</div>\n\n</form>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["teams_jersey"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"2.7 1.15 85.5 92.299\" enable-background=\"new 2.7 1.15 85.5 92.299\"\n	 xml:space=\"preserve\" class=\"svg_jersey\">\n	<g id=\"outline\">\n		<path class=\"svg_jersey_outline\" style=\"fill:"
    + escapeExpression(((helper = (helper = helpers.outline_color || (depth0 != null ? depth0.outline_color : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"outline_color","hash":{},"data":data}) : helper)))
    + ";\" d=\"M87.9,76.15l-2-17.7c-0.102-0.7-0.301-1.3-0.7-1.8c0.399-0.7,0.399-1.6,0.2-2.4c0-0.1,0-0.1,0-0.2\n			c0-0.2-0.102-0.5-0.102-0.7c-0.1-0.6-0.1-1.1-0.199-1.7c-0.101-0.5-0.101-1-0.199-1.5c0-0.3-0.102-0.6-0.102-0.8\n			c-0.1-0.7-0.3-1.3-0.699-1.8c0.301-0.6,0.399-1.3,0.301-1.9c-1.102-10.1-2.301-19.4-3-24.1C79.7,9.95,67,4.35,59.7,2.05\n			c-1.2-0.4-2.5-0.1-3.4,0.8c-0.2-0.1-0.5-0.2-0.8-0.3c-2.6-0.6-5.6-0.9-9.1-0.9c-4.1,0-7.6,0.4-9.1,0.6c-0.6-0.7-1.6-1.1-2.6-1.1\n			h-0.2c-0.3,0-0.5,0-0.8,0.1c-0.9,0.2-22.2,5.1-24.4,20.2c-0.7,4.7-1.9,14-3,24.1c-0.1,0.7,0.1,1.4,0.4,2c-0.5,0.6-0.8,1.4-0.8,2.2\n			v0.5c0,0.5-0.1,1.1-0.2,1.6c-0.1,0.7-0.2,1.3-0.2,2c0,0.1,0,0.1,0,0.2v0.1c0,0.3-0.1,0.6-0.1,1c0,0.5,0.1,1,0.3,1.5\n			c-0.4,0.5-0.7,1.2-0.8,1.8c-1.1,9.8-2.1,18.5-2.2,19.899c0,0.101,0,0.199,0,0.301v0.199c0,1.199,0.6,2.301,1.6,3\n			c0.5,0.301,4.8,2.899,10,2.899l0,0c2.1,0,4-0.399,5.8-1.3v4.199c0,0.101,0,0.199,0,0.301c0.3,3.1,4,3.898,5.6,4.199\n			c3.9,0.801,10.5,1.199,19.6,1.301l0,0l0,0c9.1,0,15.7-0.5,19.6-1.301c1.6-0.301,5.3-1.101,5.6-4.199c0-0.102,0-0.2,0-0.301V83.35\n			c1.8,0.9,3.8,1.4,6,1.4l0,0c5.1,0,9.5-2.6,10-2.9c1-0.6,1.7-1.8,1.7-3C88.1,78.65,88.1,77.75,87.9,76.15z\"/>\n	</g>\n	<g id=\"main_jersey\">\n		<path class=\"svg_jersey_base\" style=\"fill:"
    + escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"color","hash":{},"data":data}) : helper)))
    + ";\" d=\"M8.45,58.85c-1.2,10.101-2.1,18.5-2.2,19.8c0,0.101,0,0.199,0,0.199s7,4.4,12.7,1.301\n			c0-0.199,0.1-0.5,0.1-0.801v-0.1c0-0.2,0.1-0.5,0.1-0.8V78.35l0,0c0.6-4,1.6-11.1,2.6-17.8L8.45,58.85z M9.45,50.45L9.45,50.45\n			c-0.1,1.2-0.3,2.5-0.4,3.7l0,0c0,0.3-0.1,0.699-0.1,1l13.3,1.6c0-0.3,0.1-0.7,0.1-1c0-0.1,0-0.2,0-0.4c0-0.1,0-0.199,0-0.3\n			c0.1-1,0.3-2.1,0.4-3c0-0.2,0.1-0.5,0.1-0.7l-13.4-1.6C9.45,49.95,9.45,50.25,9.45,50.45z M46.45,17.55c0,0,8-4.5,8.3-11.6\n			c-7.7-1.7-17.6-0.1-17.6-0.1C39.45,14.35,46.45,17.55,46.45,17.55z M81.85,53.95c-0.1-1.2-0.299-2.3-0.397-3.5l0,0\n			c0-0.2-0.103-0.5-0.103-0.7l-13.398,1.6l0.1,0.7l0,0c0.2,1.2,0.3,2.4,0.5,3.7l0,0l0.1,1l13.401-1.6\n			C81.951,54.75,81.951,54.35,81.85,53.95z M80.951,46.05c-1.102-9.7-2.301-19.1-3-24c-1.5-10.2-13.901-15-19.301-16.7\n			c0.101,0.1,0.2,0.3,0.2,0.4c0,1-3.8,11.4-12.5,13.3l0.1-0.1l-0.3,0.1h-0.1l0,0c-2.5-0.5-4.6-1.8-6.3-3.3l-0.1-0.1l0,0\n			c-4.2-3.8-6.1-9.2-6.1-9.9c0-0.4,0.6-0.8,1.2-1.1h-0.2c0,0-19.8,4.4-21.7,17.3c-0.7,4.899-1.9,14.3-3,24l13.5,1.6\n			c0.3-2.6,0.6-4.3,0.6-4.3l-0.3,44.4c0,0,0.2,2.199,21.7,2.3l0,0c21.5-0.101,21.7-2.3,21.7-2.3l-0.3-44.4c0,0,0.2,1.7,0.6,4.3\n			L80.951,46.05z M84.451,76.55L84.451,76.55l-2-17.7l-13.301,1.6c0.9,6.7,1.9,13.8,2.601,17.8l0,0v0.1c0,0.2,0.1,0.4,0.1,0.7\n			c0,0.101,0,0.2,0,0.3c0,0.301,0.101,0.5,0.101,0.801c5.6,3.101,12.7-1.301,12.7-1.301S84.65,78.05,84.451,76.55z\"/>\n	</g>\n</svg>";
},"useData":true});



this["precompiled_templates"]["teams_profile_header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.cover_background : depth0), {"name":"unless","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  return "				<div class=\"upload_cover_prompt\">\n					<div class=\"message\">\n						<i class=\"icon-add-photo\"></i>change cover photo\n					</div>\n				</div>\n";
  },"4":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "				<div class=\"meta primary\">\n					"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.division : depth0)) != null ? stack1.full_name : stack1), depth0))
    + " / "
    + escapeExpression(((helper = (helper = helpers.league_name || (depth0 != null ? depth0.league_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"league_name","hash":{},"data":data}) : helper)))
    + "\n				</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"card inset profile_header\">\n	<div id=\"team_cover_photo\" class=\"cover_photo\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.is_captain : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		<img src=\""
    + escapeExpression(((helper = (helper = helpers.cover_background || (depth0 != null ? depth0.cover_background : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cover_background","hash":{},"data":data}) : helper)))
    + "\">\n	</div>\n	<div class=\"pic_and_info\">\n\n		<div id=\"team_profile_pic\" class=\"profile_pic\">\n			<img src=\""
    + escapeExpression(((helper = (helper = helpers.profile_picture || (depth0 != null ? depth0.profile_picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"profile_picture","hash":{},"data":data}) : helper)))
    + "\">\n		</div>\n\n		<div class=\"profile_info\">\n			<div class=\"name\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.division : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "			<div class=\"meta bio_line_1\">\n				<div class=\"jersey_colours\">\n					<div class=\"jersey home\">\n\n						";
  stack1 = ((helpers.jersey || (depth0 && depth0.jersey) || helperMissing).call(depth0, (depth0 != null ? depth0.home_color : depth0), (depth0 != null ? depth0.home_outline_color : depth0), {"name":"jersey","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n\n						<div class=\"home_or_away\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.home", {"name":"t","hash":{},"data":data})))
    + "</div>\n					</div>\n					<div class=\"jersey away\">\n						";
  stack1 = ((helpers.jersey || (depth0 && depth0.jersey) || helperMissing).call(depth0, (depth0 != null ? depth0.away_color : depth0), (depth0 != null ? depth0.away_outline_color : depth0), {"name":"jersey","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n						<div class=\"home_or_away\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.away", {"name":"t","hash":{},"data":data})))
    + "</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>";
},"useData":true});



this["precompiled_templates"]["teams_roster"] = Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "		<div class=\"page_title\">\n			<div class=\"title\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.can_add_players : depth0), {"name":"if","hash":{},"fn":this.program(2, data, depths),"inverse":this.program(4, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</div>\n			\n";
  stack1 = this.invokePartial(partials.teams_seasons_selector, '			', 'teams_seasons_selector', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n		</div>\n\n		<article class=\"card roster\">\n			<section class=\"standings\">\n				<table class=\"table tablesorter\">\n					\n					<thead>\n						<tr>\n							<th class=\"sortable\">#</th>\n							<th>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "player", {"name":"t","hash":{},"data":data})))
    + "</th>\n							<th class=\"stats sortable\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.gp", {"name":"t","hash":{},"data":data})))
    + "</th>\n							<th class=\"stats sortable\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.g", {"name":"t","hash":{},"data":data})))
    + "</th>\n							<th class=\"stats sortable\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.a", {"name":"t","hash":{},"data":data})))
    + "</th>\n							<th class=\"stats sortable\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.pts", {"name":"t","hash":{},"data":data})))
    + "</th>\n							<th class=\"stats sortable hidden-xs\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.pim", {"name":"t","hash":{},"data":data})))
    + "</th>\n							<th class=\"stats sortable hidden-xs\">PPG</th>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.can_edit_roster : depth0), {"name":"if","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "						</tr>\n					</thead>\n\n					<tbody>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.roster : depth0)) != null ? stack1.players : stack1), {"name":"each","hash":{},"fn":this.program(8, data, depths),"inverse":this.program(13, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "					</tbody>\n\n				</table>\n			</section>\n		</article>\n\n		<article class=\"card roster\">\n			<section class=\"standings\">\n				<table class=\"table\">\n					<tr>\n						<th>#</th>\n						<th>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "goalie", {"name":"t","hash":{},"data":data})))
    + "</th>\n						<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.gp", {"name":"t","hash":{},"data":data})))
    + "</th>\n						<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.w", {"name":"t","hash":{},"data":data})))
    + "</th>\n						<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.gaa", {"name":"t","hash":{},"data":data})))
    + "</th>\n						<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.so", {"name":"t","hash":{},"data":data})))
    + "</th>\n						<th class=\"stats\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "stats.s_perc", {"name":"t","hash":{},"data":data})))
    + "</th>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.can_edit_roster : depth0), {"name":"if","hash":{},"fn":this.program(15, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "					</tr>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.roster : depth0)) != null ? stack1.goalies : stack1), {"name":"each","hash":{},"fn":this.program(17, data, depths),"inverse":this.program(20, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</table>\n			</section>\n		</article>\n";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "					<button type=\"button\" id=\"add_player\" class=\"btn btn-success js-add-player\"><i class=\"icon-plus\"></i> "
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.add_player", {"name":"t","hash":{},"data":data})))
    + "</button>\n";
},"4":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "					"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.roster", {"name":"t","hash":{},"data":data})))
    + "\n";
},"6":function(depth0,helpers,partials,data) {
  return "								<th>&nbsp;</th>\n";
  },"8":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "							<tr>\n								<td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.number : stack1), depth0))
    + "</td>\n								<td>\n									<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n										<div class=\"profile_pic\">\n											<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n										</div>\n										<span class=\"player_name\">\n											"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.captain : stack1), {"name":"if","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n										</span>\n									</a>\n								</td>\n								<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.gp || (depth0 != null ? depth0.gp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gp","hash":{},"data":data}) : helper)))
    + "</td>\n								<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.goals || (depth0 != null ? depth0.goals : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"goals","hash":{},"data":data}) : helper)))
    + "</td>\n								<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.assists || (depth0 != null ? depth0.assists : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"assists","hash":{},"data":data}) : helper)))
    + "</td>\n								<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.points || (depth0 != null ? depth0.points : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"points","hash":{},"data":data}) : helper)))
    + "</td>\n								<td class=\"stats hidden-xs\">"
    + escapeExpression(((helper = (helper = helpers.pim || (depth0 != null ? depth0.pim : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pim","hash":{},"data":data}) : helper)))
    + "</td>\n								<td class=\"stats hidden-xs\">"
    + escapeExpression(((helper = (helper = helpers.ppg || (depth0 != null ? depth0.ppg : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ppg","hash":{},"data":data}) : helper)))
    + "</td>\n";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1].can_edit_roster : depths[1]), {"name":"if","hash":{},"fn":this.program(11, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "							</tr>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.captain : stack1), depth0))
    + ")";
},"11":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "									<td class=\"edit\">\n										<button type=\"button\" class=\"edit_player btn btn-default js-edit-player\" data-user-id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n											<i class=\"icon-vertical-menu3\"></i>\n										</button>\n									</td>\n";
},"13":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "							<tr>\n								<td colspan=\"7\">\n									"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.no_players_on_the_roster", {"name":"t","hash":{},"data":data})))
    + "\n								</td>\n							</tr>\n";
},"15":function(depth0,helpers,partials,data) {
  return "							<th>&nbsp;</th>\n";
  },"17":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "					<tr>\n						<td class=\"stats\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.number : stack1), depth0))
    + "</td>\n						<td>\n							<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n								<div class=\"profile_pic\">\n									<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n								</div>\n								<span class=\"player_name\">\n									"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n								</span>\n							</a>\n						</td>\n						<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.gp || (depth0 != null ? depth0.gp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gp","hash":{},"data":data}) : helper)))
    + "</td>\n						<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.wins || (depth0 != null ? depth0.wins : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"wins","hash":{},"data":data}) : helper)))
    + "</td>\n						<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.gaa || (depth0 != null ? depth0.gaa : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gaa","hash":{},"data":data}) : helper)))
    + "</td>\n						<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.so || (depth0 != null ? depth0.so : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"so","hash":{},"data":data}) : helper)))
    + "</td>\n						<td class=\"stats\">"
    + escapeExpression(((helper = (helper = helpers.sv || (depth0 != null ? depth0.sv : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sv","hash":{},"data":data}) : helper)))
    + "</td>\n";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1].can_edit_roster : depths[1]), {"name":"if","hash":{},"fn":this.program(18, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "					</tr>\n";
},"18":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "							<td class=\"edit\">\n								<button type=\"button\" class=\"edit_player btn btn-default js-edit-player\" data-user-id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n									<i class=\"icon-vertical-menu3\"></i>\n								</button>\n							</td>\n";
},"20":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "						<tr>\n							<td colspan=\"7\">\n								"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.no_goalies_on_the_roster", {"name":"t","hash":{},"data":data})))
    + "\n							</td>\n						</tr>\n";
},"22":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.loading, '	', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.roster : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.program(22, data, depths),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"usePartial":true,"useData":true,"useDepths":true});



this["precompiled_templates"]["teams_seasons_selector"] = Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "	<div class=\"season_scope\">\n		<div class=\"select_container\">\n			<select id=\"seasons_selector\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.season_groups : depth0), {"name":"each","hash":{},"fn":this.program(2, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</select>\n		</div>\n	</div>\n";
},"2":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "					<optgroup label=\""
    + escapeExpression(lambda((depth0 != null ? depth0['0'] : depth0), depth0))
    + "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0['1'] : depth0), {"name":"each","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data,depths) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return "							<option value=\""
    + escapeExpression(lambda((depth0 != null ? depth0['1'] : depth0), depth0))
    + "\" "
    + escapeExpression(((helpers.seasonSelect || (depth0 && depth0.seasonSelect) || helperMissing).call(depth0, (depths[2] != null ? depths[2].current_season_id : depths[2]), (depths[2] != null ? depths[2].selected_season_id : depths[2]), (depth0 != null ? depth0['1'] : depth0), {"name":"seasonSelect","hash":{},"data":data})))
    + ">"
    + escapeExpression(lambda((depth0 != null ? depth0['0'] : depth0), depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.season_groups : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true,"useDepths":true});



this["precompiled_templates"]["users_about"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<section class=\"about player_line\" data-full_name=\""
    + escapeExpression(((helper = (helper = helpers.full_name || (depth0 != null ? depth0.full_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"full_name","hash":{},"data":data}) : helper)))
    + "\" data-profile_picture=\""
    + escapeExpression(((helper = (helper = helpers.profile_picture || (depth0 != null ? depth0.profile_picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"profile_picture","hash":{},"data":data}) : helper)))
    + "\" data-username=\""
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + "\" data-user-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n	\n	<div class=\"profile_pic\">\n		\n		<img src=\""
    + escapeExpression(((helper = (helper = helpers.profile_picture || (depth0 != null ? depth0.profile_picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"profile_picture","hash":{},"data":data}) : helper)))
    + "\">\n		\n	</div>\n\n	<div class=\"user_info\">\n		<div class=\"name\">\n			"
    + escapeExpression(((helper = (helper = helpers.full_name || (depth0 != null ? depth0.full_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"full_name","hash":{},"data":data}) : helper)))
    + "\n		</div>\n\n		<div class=\"timeago\">\n			"
    + escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"location","hash":{},"data":data}) : helper)))
    + "\n		</div>\n	</div>\n\n</section>";
},"useData":true});



this["precompiled_templates"]["boxscore_content"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "				<div class=\"form-group\">\n					<div class=\"btn-group btn-group-justified\" id=\"boxscore_tabs_container\">\n						<div class=\"btn-group\">\n							<button type=\"button\" data-tab=\"scoring\" class=\"btn btn-default js-boxscore-summary-tab btn-primary\" id=\"scoring_summary_btn\">\n								<div class=\"button_text\">\n									Scoring\n								</div>\n							</button>\n						</div>\n						<div class=\"btn-group\">\n							<button type=\"button\" data-tab=\"penalties\" class=\"btn btn-default js-boxscore-summary-tab\" id=\"penalties_summary_btn\">\n								<div class=\"button_text\">\n									Penalties\n								</div>\n							</button>\n						</div>\n					</div>\n				</div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.boxscore_scoring_summary, '					', 'boxscore_scoring_summary', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "					<article class=\"card\">\n						<div class=\"title\">\n							<h2>Stats haven't been uploaded</h2>\n						</div>\n						<section class=\"about\">\n							<div class=\"profile_pic\">\n								<img class=\"touch\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n							</div>\n							<div class=\"user_info\">\n								<div class=\"name\">\n									"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n								</div>\n								<div class=\"timeago\">\n									"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.location : stack1), depth0))
    + "\n								</div>\n							</div>\n						</section>\n						<div class=\"main\">\n							<div class=\"comment_content\">\n								<p>We haven't finalized the stats for this game yet. Please check back soon.</p>\n							</div>\n						</div>\n					</article>\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "				<div id=\"penalties_summary_content\" class=\"hide\">\n";
  stack1 = this.invokePartial(partials.boxscore_penalty_summary, '					', 'boxscore_penalty_summary', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div id=\"boxscore_summary\" class=\"inner-page inner-page-current\">\n	<div id=\"boxscore_summary_scroller\" class=\"main_scrolling container\">\n		<div id=\"boxscore_summary_content\">\n";
  stack1 = this.invokePartial(partials.boxscore_header, '			', 'boxscore_header', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n	</div>\n</div>\n\n<div id=\"boxscore_scores\" class=\"inner-page\">\n	<div id=\"boxscore_scores_scroller\" class=\"main_scrolling\">\n		<div class=\"container cards_container\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.has_penalties : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			<div id=\"scoring_summary_content\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.finalized : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.has_penalties : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n	</div>\n</div>\n\n<div id=\"boxscore_roster\" class=\"inner-page\">\n	<div id=\"boxscore_roster_scroller\" class=\"main_scrolling\">\n		<div id=\"boxscore_roster_content\" class=\"container cards_container\">\n\n			<div class=\"container\">\n				<div class=\"form-group\">\n					<div class=\"btn-group btn-group-justified\" id=\"boxscore_tabs_container\">\n						<div class=\"btn-group\">\n							<button type=\"button\" data-tab=\"home\" class=\"btn btn-default js-boxscore-roster-tab btn-primary\" id='home_team_btn'>\n								<div class=\"button_text\">\n									"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.home_team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n								</div>\n							</button>\n						</div>\n						<div class=\"btn-group\">\n							<button type=\"button\" data-tab=\"away\" class=\"btn btn-default js-boxscore-roster-tab\" id=\"away_team_btn\">\n								<div class=\"button_text\">\n									"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.away_team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n								</div>\n							</button>\n						</div>\n					</div>\n				</div>\n			</div>\n\n			<div id=\"home_innerpage_content\">\n";
  stack1 = this.invokePartial(partials.boxscore_stats_column, '				', 'boxscore_stats_column', (depth0 != null ? depth0.home_roster : depth0), undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</div>\n			<div class=\"hide\" id=\"away_innerpage_content\">\n";
  stack1 = this.invokePartial(partials.boxscore_stats_column, '				', 'boxscore_stats_column', (depth0 != null ? depth0.away_roster : depth0), undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</div>\n		</div>\n	</div>\n</div>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["boxscore_header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "						<th class=\"stats\">\n							"
    + escapeExpression(((helper = (helper = helpers.short_name || (depth0 != null ? depth0.short_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"short_name","hash":{},"data":data}) : helper)))
    + "\n						</th>\n";
},"3":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "						<td class=\"stats\">\n							"
    + escapeExpression(lambda(depth0, depth0))
    + "\n						</td>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"container cards_container\">\n	<article class=\"card\">\n		<div class=\"title\">\n			<h2>Post-game analysis</h2>\n		</div>\n		<section class=\"about\">\n			<div class=\"profile_pic\">\n				<img class=\"touch\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n			</div>\n			<div class=\"user_info\">\n				<div class=\"name\">\n					"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n				</div>\n				<div class=\"timeago\">\n					"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.location : stack1), depth0))
    + "\n				</div>\n			</div>\n		</section>\n		<div class=\"main\">\n			<div class=\"comment_content\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.post_game_summary : depth0), {"name":"each","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</div>\n		</div>\n	</article>\n</div>\n";
},"6":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "					<p><strong>"
    + escapeExpression(lambda((depth0 != null ? depth0.link_title : depth0), depth0))
    + ":</strong> "
    + escapeExpression(lambda((depth0 != null ? depth0.message : depth0), depth0))
    + "</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, functionType="function", buffer = "<div class=\"game-summary-header\">\n	<div class=\"container\">\n\n		<div class=\"game-summary-meta\">\n			<div class=\"meta-line\">\n				"
    + escapeExpression(((helpers.moment || (depth0 && depth0.moment) || helperMissing).call(depth0, (depth0 != null ? depth0.start_time : depth0), "ddd, MMM Do - h:mm a", {"name":"moment","hash":{},"data":data})))
    + "\n			</div>\n			<div class=\"meta-line\">\n				"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.rink : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n			</div>\n			<div class=\"meta-line\">\n				"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.division : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n			</div>\n		</div>\n\n		<div class=\"scorecard\">\n			<div class=\"team home\">\n				<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.home_team : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/team/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.home_team : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"home\">\n					<div class=\"profile_pic\">\n						<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.home_team : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n					</div>\n					<div class=\"name\">\n						"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.home_team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n					</div>\n				</a>\n			</div>\n			<div class=\"scoreboard\">\n				<div class=\"board home\">\n					<div class=\"score\">\n						"
    + escapeExpression(((helper = (helper = helpers.home_score || (depth0 != null ? depth0.home_score : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"home_score","hash":{},"data":data}) : helper)))
    + "\n					</div>\n				</div>\n				<div class=\"board away\">\n					<div class=\"score\">\n						"
    + escapeExpression(((helper = (helper = helpers.away_score || (depth0 != null ? depth0.away_score : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"away_score","hash":{},"data":data}) : helper)))
    + "\n					</div>\n				</div>\n				<div class=\"game_status\">Final</div>\n			</div>\n			<div class=\"team away\">\n				<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.away_team : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/team/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.away_team : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n					<div class=\"profile_pic\">\n						<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.away_team : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n					</div>\n					<div class=\"name\">\n						"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.away_team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n					</div>\n				</a>\n			</div>\n		</div>\n\n		<div class=\"shots\">\n			<table class=\"table\">\n				<tr>\n					<th>\n						Shots by period\n					</th>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.periods : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "					<th class=\"total\">\n						Total\n					</th>\n				</tr>\n				<tr>\n					<td>\n						"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.home_team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n					</td>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.home_shots : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "					<td class=\"total\">\n						"
    + escapeExpression(((helper = (helper = helpers.total_home_shots || (depth0 != null ? depth0.total_home_shots : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total_home_shots","hash":{},"data":data}) : helper)))
    + "\n					</td>\n				</tr>\n				<tr>\n					<td>\n						"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.away_team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n					</th>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.away_shots : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "					<td class=\"total\">\n						"
    + escapeExpression(((helper = (helper = helpers.total_away_shots || (depth0 != null ? depth0.total_away_shots : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total_away_shots","hash":{},"data":data}) : helper)))
    + "\n					</td>\n				</tr>\n			</table>\n		</div>\n	</div>\n</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.finalized : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});



this["precompiled_templates"]["boxscore_penalty_summary"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<article class=\"card\">\n		<section class=\"scoring_or_penalty_summary penalties\">\n			<div class=\"period\">\n				<div class=\"main_title\">\n					"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\n				</div>\n			</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.penalties : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</section>\n	</article>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.penalties : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "					<div class=\"goal_or_penalty\">\n						<div class=\"meta\">\n							<div class=\"by_team\">\n								<div class=\"profile_pic\">\n									<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n								</div>\n								<div class=\"team_name\">\n									"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n								</div>\n							</div>\n							<div class=\"time_of_event\">\n								"
    + escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"time","hash":{},"data":data}) : helper)))
    + "\n							</div>\n						</div>\n						<div class=\"event_stat_line\">\n							<div class=\"event_by";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.extra : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n								<div class=\"who_by\">\n									<a class=\"player_name\" href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n										"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n									</a>\n									<div class=\"extra_info\">\n										"
    + escapeExpression(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amount","hash":{},"data":data}) : helper)))
    + " mins\n									</div>\n								</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.extra : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "							</div>\n						</div>\n					</div>\n";
},"4":function(depth0,helpers,partials,data) {
  return " uses_event_type";
  },"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "								<div class=\"event_type\">\n									"
    + escapeExpression(((helper = (helper = helpers.extra || (depth0 != null ? depth0.extra : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"extra","hash":{},"data":data}) : helper)))
    + "\n								</div>\n";
},"8":function(depth0,helpers,partials,data) {
  return "				<div class=\"no-events\">No penalties this period.</div>\n";
  },"10":function(depth0,helpers,partials,data) {
  return "				<div class=\"no-events\">No penalties were recorded.</div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.periods : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});



this["precompiled_templates"]["boxscore_scoring_summary"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<article class=\"card\">\n		<section class=\"scoring_or_penalty_summary scoring\">\n			<div class=\"period\">\n				<div class=\"main_title\">\n					"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\n				</div>\n			</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.goals : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</section>\n	</article>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.goals : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.program(13, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "					<div class=\"goal_or_penalty\">\n						<div class=\"meta\">\n							<div class=\"by_team\">\n								<div class=\"profile_pic\">\n									<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n								</div>\n								<div class=\"team_name\">\n									"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n								</div>\n							</div>\n							<div class=\"time_of_event\">\n								"
    + escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"time","hash":{},"data":data}) : helper)))
    + "\n							</div>\n						</div>\n						<div class=\"event_stat_line\">\n							<div class=\"event_by";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.stat : depth0)) != null ? stack1.extra : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n								<div class=\"who_by\">\n									<a class=\"player_name\" href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n										"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n									</a>\n									<div class=\"extra_info\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.assist_one_user : depth0)) != null ? stack1.full_name : stack1), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "									</div>\n								</div>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.stat : depth0)) != null ? stack1.extra : stack1), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "							</div>\n						</div>\n					</div>\n";
},"4":function(depth0,helpers,partials,data) {
  return " uses_event_type";
  },"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "											"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.assist_one_user : depth0)) != null ? stack1.full_name : stack1), depth0));
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.assist_two_user : depth0)) != null ? stack1.full_name : stack1), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return ", "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.assist_two_user : depth0)) != null ? stack1.full_name : stack1), depth0));
},"9":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "											"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.assist_two_user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "								<div class=\"event_type\">\n									"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.stat : depth0)) != null ? stack1.extra : stack1), depth0))
    + "\n								</div>\n";
},"13":function(depth0,helpers,partials,data) {
  return "				<div class=\"no-events\">No goals this period.</div>\n";
  },"15":function(depth0,helpers,partials,data) {
  return "				<div class=\"no-events\">No goals were recorded.</div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.periods : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});



this["precompiled_templates"]["boxscore_show"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"hc_header\">\n	<button class=\"menu_button\" id=\"boxscore_back_btn\">\n		<i class=\"icon-arrow-left\"></i>\n	</button>\n\n	<h4 id=\"boxscore_header_text\">BOXSCORE</h4>\n\n	<button type=\"submit\" class=\"menu_button right\" id=\"boxscore_refresh_btn\">\n		<i class=\"icon-refresh\"></i>\n	</button>\n</div>\n\n<div id=\"boxscore_inner_transitions\" class=\"inner_transitions\">\n";
  stack1 = this.invokePartial(partials.loading, '	', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n\n<div id=\"boxscore_tabs\" class=\"fixed_navbar\">\n	<div class=\"tabs_container highlight_0\" data-position=\"1\">\n		<div data-position=\"0\" data-tab=\"boxscore_summary\" class=\"tab col-xs-4\">\n			<div class=\"tab_name\">\n				Boxscore\n			</div>\n		</div>\n		<div data-position=\"1\" data-tab=\"boxscore_scores\" class=\"tab col-xs-4\">\n			<div class=\"tab_name\">\n				Summary\n			</div>\n		</div>\n		<div data-position=\"2\" data-tab=\"boxscore_roster\" class=\"tab col-xs-4\">\n			<div class=\"tab_name\">\n				Roster\n			</div>\n		</div>\n	</div>\n</div>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["boxscore_stats_column"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "				<thead>\n					<tr>\n						<th>#</th>\n						<th>Goalie</th>\n						<th class=\"stats\">Shots</th>\n						<th class=\"stats\">Saves</th>\n						<th class=\"stats\">SV%</th>\n					</tr>\n				</thead>\n				<tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.goalies : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</tbody>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "						<tr>\n							<td>\n								"
    + escapeExpression(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"number","hash":{},"data":data}) : helper)))
    + "\n							</td>\n							<td>\n								<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n									<div class=\"profile_pic\">\n										<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n									</div>\n									<span class=\"player_name\">\n										"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n									</span>\n								</a>\n							</td>\n							<td class=\"stats\">\n								"
    + escapeExpression(((helper = (helper = helpers.shots || (depth0 != null ? depth0.shots : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"shots","hash":{},"data":data}) : helper)))
    + "\n							</td>\n							<td class=\"stats\">\n								"
    + escapeExpression(((helper = (helper = helpers.saves || (depth0 != null ? depth0.saves : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"saves","hash":{},"data":data}) : helper)))
    + "\n							</td>\n							<td class=\"stats\">\n								"
    + escapeExpression(((helper = (helper = helpers.sv || (depth0 != null ? depth0.sv : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sv","hash":{},"data":data}) : helper)))
    + "\n							</td>\n						</tr>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "					<tr>\n						<td>\n							"
    + escapeExpression(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"number","hash":{},"data":data}) : helper)))
    + "\n						</td>\n						<td>\n							<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" mobile-href=\"/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n								<div class=\"profile_pic\">\n									<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n								</div>\n								<span class=\"player_name\">\n									"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n								</span>\n							</a>\n						</td>\n						<td class=\"stats\">\n							"
    + escapeExpression(((helper = (helper = helpers.goals || (depth0 != null ? depth0.goals : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"goals","hash":{},"data":data}) : helper)))
    + "\n						</td>\n						<td class=\"stats\">\n							"
    + escapeExpression(((helper = (helper = helpers.assists || (depth0 != null ? depth0.assists : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"assists","hash":{},"data":data}) : helper)))
    + "\n						</td>\n						<td class=\"stats\">\n							"
    + escapeExpression(((helper = (helper = helpers.points || (depth0 != null ? depth0.points : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"points","hash":{},"data":data}) : helper)))
    + "\n						</td>\n						<td class=\"stats\">\n							"
    + escapeExpression(((helper = (helper = helpers.penalties || (depth0 != null ? depth0.penalties : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"penalties","hash":{},"data":data}) : helper)))
    + "\n						</td>\n					</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<article class=\"card roster\">\n	<section class=\"standings\">\n		<table class=\"table\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.goalies : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</table>\n	</section>\n</article>\n\n<article class=\"card roster\">\n	<section class=\"standings\">\n		<table class=\"table\">\n			<thead>\n				<tr>\n					<th>#</th>\n					<th>Players</th>\n					<th class=\"stats\">G</th>\n					<th class=\"stats\">A</th>\n					<th class=\"stats\">PTS</th>\n					<th class=\"stats\">PIM</th>\n				</tr>\n			</thead>\n			<tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.skaters : depth0), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</tbody>\n		</table>\n	</section>\n</article>";
},"useData":true});



this["precompiled_templates"]["event_attendings"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\"sidebar_player_line_"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"sidebar_player_line\">\n	<div class=\"sidebar_player_line_container\">\n		<div class=\"sidebar_player_line_profile_picture\" data-user-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n			<a mobile-href=\"/user/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n				<img src=\""
    + escapeExpression(((helper = (helper = helpers.profile_picture || (depth0 != null ? depth0.profile_picture : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"profile_picture","hash":{},"data":data}) : helper)))
    + "\">\n			</a>\n		</div>\n		<div class=\"sidebar_player_line_description\">\n			<a mobile-href=\"/user/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"host_tag ellipsis\">\n				"
    + escapeExpression(((helper = (helper = helpers.full_name || (depth0 != null ? depth0.full_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"full_name","hash":{},"data":data}) : helper)))
    + "\n			</a>\n			<div class=\"sidebar_player_line_text sidebar_payment sidebar_player_line_grey\">\n				";
  stack1 = ((helpers.attendingInfo || (depth0 && depth0.attendingInfo) || helperMissing).call(depth0, depth0, {"name":"attendingInfo","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n			</div>\n		</div>\n		<div class=\"check_x\" data-attending-id=\""
    + escapeExpression(((helper = (helper = helpers.attending_id || (depth0 != null ? depth0.attending_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"attending_id","hash":{},"data":data}) : helper)))
    + "\" data-user-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-username=\""
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + "\">\n			<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n				 width=\"30px\" height=\"30px\" viewBox=\"0 0 78.6 78.6\" enable-background=\"new 0 0 78.6 78.6\" xml:space=\"preserve\" class=\"circle_check\">\n				<path class=\"circle_check_poly\" d=\"M39.3,78.6C61,78.6,78.6,61,78.6,39.3S61,0,39.3,0S0,17.6,0,39.3S17.6,78.6,39.3,78.6z M39.3,7.8\n				c17.4,0,31.4,14.2,31.4,31.5c0.1,17.3-14,31.5-31.4,31.5C22,70.8,7.8,56.7,7.8,39.3C7.9,22,22,7.8,39.3,7.8z M60.8,27.8l-6.1-6.4\n				L32.4,44.7L24,35.9l-6.1,6.4l14.2,14.9l0.3-0.2l0.3,0.2L60.8,27.8z\"/>\n			</svg>\n			<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"30px\" height=\"30px\" viewBox=\"0 0 78.6 78.6\" enable-background=\"new 0 0 78.6 78.6\" xml:space=\"preserve\" class=\"circle_x\">\n				<g>\n					<polygon class=\"circle_x_poly\" points=\"49.5,56.3 56.3,49.5 46.1,39.3 56.3,29.1 49.5,22.4 39.4,32.6 29.2,22.4 22.4,29.2 32.6,39.399\n						22.4,49.5 29.1,56.3 39.3,46.1 	\"/>\n					<path class=\"circle_x_poly\" d=\"M78.6,39.3C78.6,17.7,61,0,39.3,0S0,17.7,0,39.3C0,61,17.6,78.6,39.3,78.6S78.6,61,78.6,39.3z M39.3,70.7\n						C22,70.7,7.8,56.6,7.8,39.3C7.9,22,22,7.8,39.3,7.8S70.8,22,70.8,39.3C70.8,56.7,56.6,70.7,39.3,70.7z\"/>\n				</g>\n			</svg>\n		</div>\n	</div>\n</div>";
},"useData":true});



this["precompiled_templates"]["event_comment"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"comment\">\n	<div class=\"profile_pic\">\n		<a mobile-href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.mobile_link : stack1), depth0))
    + "\">\n			<img class=\"touch\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n		</a>\n	</div>\n\n	<div class=\"comment_data\">\n		<div class=\"who_said_what\">\n			<div class=\"they_said\">\n				<div class=\"name\">\n					<a mobile-href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.mobile_link : stack1), depth0))
    + "\">\n						"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n					</a>\n				</div>\n				<div class=\"message\">\n					";
  stack1 = ((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n				</div>\n			</div>\n		</div>\n		<div class=\"timeago\">\n				<span>"
    + escapeExpression(((helpers.moment || (depth0 && depth0.moment) || helperMissing).call(depth0, (depth0 != null ? depth0.created_at : depth0), {"name":"moment","hash":{},"data":data})))
    + "</span>";
  stack1 = ((helpers.check_global || (depth0 && depth0.check_global) || helperMissing).call(depth0, 0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), {"name":"check_global","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n		</div>\n	</div>\n</div>";
},"useData":true});



this["precompiled_templates"]["event_comments"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.event_comment, '	', 'event_comment', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.empty_page, '	', 'empty_page', depth0, {
    'icon': ("icon-single-comment-otl"),
    'message': ("Be the first to comment on this event.")
  }, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.comments : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"usePartial":true,"useData":true});



this["precompiled_templates"]["event_description"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.rink_name : stack1), depth0));
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.event_league_header, '		', 'event_league_header', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		<div class=\"profile_pic\">\n			<img src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.user : stack1)) != null ? stack1.profile_picture : stack1), depth0))
    + "\"/>\n		</div>\n		<div class=\"event_info\">\n			<div class=\"title\">\n				"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.title : stack1), depth0))
    + "\n			</div>\n			<p class=\"description\">\n				"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.description : stack1), depth0))
    + "\n			</p>\n		</div>\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "		<button id=\"event_driving_directions\" class=\"btn btn-default btn-block\">Get directions</button>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.is_league_game : stack1), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<a mobile-href=\"/boxscore/"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.boxscore : stack1)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"btn btn-default btn-block\">\n				Boxscore\n			</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div class=\"count_me_in_container\">\n	<div id=\"rsvp_container\" type=\"button\">\n		<button id=\"count_me_out\">Not this time</button>\n		<button id=\"count_me_in\" type=\"button\">Count me in</button>\n	</div>\n</div>\n\n<div class=\"location_info\">\n	<h4 class=\"text-center\">"
    + escapeExpression(((helpers.moment || (depth0 && depth0.moment) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.start_time : stack1), "ddd, MMM Do @ h:mm a", {"name":"moment","hash":{},"data":data})))
    + "</h4>\n	<h5 class=\"text-center\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.rink : stack1)) != null ? stack1.name : stack1), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.rink_name : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h4>\n</div>\n\n<div class=\"game_description\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.is_league_game : stack1), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n\n<div class=\"arena_description\">\n\n	<div class=\"arena\">\n		<div class=\"map\">\n			<img src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.rink : stack1)) != null ? stack1.map_url : stack1), depth0))
    + "\" />\n		</div>\n		<div class=\"info\">\n			<div class=\"name\">\n				"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.rink : stack1)) != null ? stack1.name : stack1), depth0))
    + "\n			</div>\n			<div class=\"address\">\n				"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.rink : stack1)) != null ? stack1.address : stack1), depth0))
    + " "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.rink : stack1)) != null ? stack1.city : stack1), depth0))
    + ", "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.rink : stack1)) != null ? stack1.zipcode : stack1), depth0))
    + "\n			</div>\n		</div>\n	</div>\n\n\n</div>\n\n<div class=\"event_extra_info\">\n";
  stack1 = ((helpers.ifOs || (depth0 && depth0.ifOs) || helperMissing).call(depth0, "android", {"name":"ifOs","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["event_league_header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		<p>"
    + escapeExpression(lambda(depth0, depth0))
    + "</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<div class=\"league-header\">\n	<section class=\"teams\">\n		<a class=\"team home\" mobile-href=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.home_team : stack1)) != null ? stack1.link : stack1), depth0))
    + "\">\n			<div class=\"team_info\">\n				<div class=\"profile_pic\">\n					<img src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.home_team : stack1)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n				</div>\n				<div class=\"team_name\">\n					"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.home_team : stack1)) != null ? stack1.name : stack1), depth0))
    + "\n					<div class=\"home-or-away\">\n						<div class=\"jersey\">\n							<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"2.7 1.15 85.5 92.299\" enable-background=\"new 2.7 1.15 85.5 92.299\"\n								 xml:space=\"preserve\" class=\"svg_jersey\">\n								<g id=\"outline\">\n									<path class=\"svg_jersey_outline\" style=\"fill:"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.home_team : stack1)) != null ? stack1.home_outline_color : stack1), depth0))
    + ";\" d=\"M87.9,76.15l-2-17.7c-0.102-0.7-0.301-1.3-0.7-1.8c0.399-0.7,0.399-1.6,0.2-2.4c0-0.1,0-0.1,0-0.2\n										c0-0.2-0.102-0.5-0.102-0.7c-0.1-0.6-0.1-1.1-0.199-1.7c-0.101-0.5-0.101-1-0.199-1.5c0-0.3-0.102-0.6-0.102-0.8\n										c-0.1-0.7-0.3-1.3-0.699-1.8c0.301-0.6,0.399-1.3,0.301-1.9c-1.102-10.1-2.301-19.4-3-24.1C79.7,9.95,67,4.35,59.7,2.05\n										c-1.2-0.4-2.5-0.1-3.4,0.8c-0.2-0.1-0.5-0.2-0.8-0.3c-2.6-0.6-5.6-0.9-9.1-0.9c-4.1,0-7.6,0.4-9.1,0.6c-0.6-0.7-1.6-1.1-2.6-1.1\n										h-0.2c-0.3,0-0.5,0-0.8,0.1c-0.9,0.2-22.2,5.1-24.4,20.2c-0.7,4.7-1.9,14-3,24.1c-0.1,0.7,0.1,1.4,0.4,2c-0.5,0.6-0.8,1.4-0.8,2.2\n										v0.5c0,0.5-0.1,1.1-0.2,1.6c-0.1,0.7-0.2,1.3-0.2,2c0,0.1,0,0.1,0,0.2v0.1c0,0.3-0.1,0.6-0.1,1c0,0.5,0.1,1,0.3,1.5\n										c-0.4,0.5-0.7,1.2-0.8,1.8c-1.1,9.8-2.1,18.5-2.2,19.899c0,0.101,0,0.199,0,0.301v0.199c0,1.199,0.6,2.301,1.6,3\n										c0.5,0.301,4.8,2.899,10,2.899l0,0c2.1,0,4-0.399,5.8-1.3v4.199c0,0.101,0,0.199,0,0.301c0.3,3.1,4,3.898,5.6,4.199\n										c3.9,0.801,10.5,1.199,19.6,1.301l0,0l0,0c9.1,0,15.7-0.5,19.6-1.301c1.6-0.301,5.3-1.101,5.6-4.199c0-0.102,0-0.2,0-0.301V83.35\n										c1.8,0.9,3.8,1.4,6,1.4l0,0c5.1,0,9.5-2.6,10-2.9c1-0.6,1.7-1.8,1.7-3C88.1,78.65,88.1,77.75,87.9,76.15z\"/>\n								</g>\n								<g id=\"main_jersey\">\n									<path class=\"svg_jersey_base\" style=\"fill:"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.home_team : stack1)) != null ? stack1.home_color : stack1), depth0))
    + ";\" d=\"M8.45,58.85c-1.2,10.101-2.1,18.5-2.2,19.8c0,0.101,0,0.199,0,0.199s7,4.4,12.7,1.301\n										c0-0.199,0.1-0.5,0.1-0.801v-0.1c0-0.2,0.1-0.5,0.1-0.8V78.35l0,0c0.6-4,1.6-11.1,2.6-17.8L8.45,58.85z M9.45,50.45L9.45,50.45\n										c-0.1,1.2-0.3,2.5-0.4,3.7l0,0c0,0.3-0.1,0.699-0.1,1l13.3,1.6c0-0.3,0.1-0.7,0.1-1c0-0.1,0-0.2,0-0.4c0-0.1,0-0.199,0-0.3\n										c0.1-1,0.3-2.1,0.4-3c0-0.2,0.1-0.5,0.1-0.7l-13.4-1.6C9.45,49.95,9.45,50.25,9.45,50.45z M46.45,17.55c0,0,8-4.5,8.3-11.6\n										c-7.7-1.7-17.6-0.1-17.6-0.1C39.45,14.35,46.45,17.55,46.45,17.55z M81.85,53.95c-0.1-1.2-0.299-2.3-0.397-3.5l0,0\n										c0-0.2-0.103-0.5-0.103-0.7l-13.398,1.6l0.1,0.7l0,0c0.2,1.2,0.3,2.4,0.5,3.7l0,0l0.1,1l13.401-1.6\n										C81.951,54.75,81.951,54.35,81.85,53.95z M80.951,46.05c-1.102-9.7-2.301-19.1-3-24c-1.5-10.2-13.901-15-19.301-16.7\n										c0.101,0.1,0.2,0.3,0.2,0.4c0,1-3.8,11.4-12.5,13.3l0.1-0.1l-0.3,0.1h-0.1l0,0c-2.5-0.5-4.6-1.8-6.3-3.3l-0.1-0.1l0,0\n										c-4.2-3.8-6.1-9.2-6.1-9.9c0-0.4,0.6-0.8,1.2-1.1h-0.2c0,0-19.8,4.4-21.7,17.3c-0.7,4.899-1.9,14.3-3,24l13.5,1.6\n										c0.3-2.6,0.6-4.3,0.6-4.3l-0.3,44.4c0,0,0.2,2.199,21.7,2.3l0,0c21.5-0.101,21.7-2.3,21.7-2.3l-0.3-44.4c0,0,0.2,1.7,0.6,4.3\n										L80.951,46.05z M84.451,76.55L84.451,76.55l-2-17.7l-13.301,1.6c0.9,6.7,1.9,13.8,2.601,17.8l0,0v0.1c0,0.2,0.1,0.4,0.1,0.7\n										c0,0.101,0,0.2,0,0.3c0,0.301,0.101,0.5,0.101,0.801c5.6,3.101,12.7-1.301,12.7-1.301S84.65,78.05,84.451,76.55z\"/>\n								</g>\n							</svg>\n						</div>\n						"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.home", {"name":"t","hash":{},"data":data})))
    + "\n					</div>\n				</div>\n			</div>\n		</a>\n		<a class=\"team away\" mobile-href=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.away_team : stack1)) != null ? stack1.link : stack1), depth0))
    + "\">\n			<div class=\"team_info\">\n				<div class=\"profile_pic\">\n					<img src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.away_team : stack1)) != null ? stack1.profile_picture : stack1), depth0))
    + "\">\n				</div>\n				<div class=\"team_name\">\n					"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.away_team : stack1)) != null ? stack1.name : stack1), depth0))
    + "\n					<div class=\"home-or-away\">\n						<div class=\"jersey\">\n							<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"2.7 1.15 85.5 92.299\" enable-background=\"new 2.7 1.15 85.5 92.299\"\n								 xml:space=\"preserve\" class=\"svg_jersey\">\n								<g id=\"outline\">\n									<path class=\"svg_jersey_outline\" style=\"fill:"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.away_team : stack1)) != null ? stack1.away_outline_color : stack1), depth0))
    + ";\" d=\"M87.9,76.15l-2-17.7c-0.102-0.7-0.301-1.3-0.7-1.8c0.399-0.7,0.399-1.6,0.2-2.4c0-0.1,0-0.1,0-0.2\n										c0-0.2-0.102-0.5-0.102-0.7c-0.1-0.6-0.1-1.1-0.199-1.7c-0.101-0.5-0.101-1-0.199-1.5c0-0.3-0.102-0.6-0.102-0.8\n										c-0.1-0.7-0.3-1.3-0.699-1.8c0.301-0.6,0.399-1.3,0.301-1.9c-1.102-10.1-2.301-19.4-3-24.1C79.7,9.95,67,4.35,59.7,2.05\n										c-1.2-0.4-2.5-0.1-3.4,0.8c-0.2-0.1-0.5-0.2-0.8-0.3c-2.6-0.6-5.6-0.9-9.1-0.9c-4.1,0-7.6,0.4-9.1,0.6c-0.6-0.7-1.6-1.1-2.6-1.1\n										h-0.2c-0.3,0-0.5,0-0.8,0.1c-0.9,0.2-22.2,5.1-24.4,20.2c-0.7,4.7-1.9,14-3,24.1c-0.1,0.7,0.1,1.4,0.4,2c-0.5,0.6-0.8,1.4-0.8,2.2\n										v0.5c0,0.5-0.1,1.1-0.2,1.6c-0.1,0.7-0.2,1.3-0.2,2c0,0.1,0,0.1,0,0.2v0.1c0,0.3-0.1,0.6-0.1,1c0,0.5,0.1,1,0.3,1.5\n										c-0.4,0.5-0.7,1.2-0.8,1.8c-1.1,9.8-2.1,18.5-2.2,19.899c0,0.101,0,0.199,0,0.301v0.199c0,1.199,0.6,2.301,1.6,3\n										c0.5,0.301,4.8,2.899,10,2.899l0,0c2.1,0,4-0.399,5.8-1.3v4.199c0,0.101,0,0.199,0,0.301c0.3,3.1,4,3.898,5.6,4.199\n										c3.9,0.801,10.5,1.199,19.6,1.301l0,0l0,0c9.1,0,15.7-0.5,19.6-1.301c1.6-0.301,5.3-1.101,5.6-4.199c0-0.102,0-0.2,0-0.301V83.35\n										c1.8,0.9,3.8,1.4,6,1.4l0,0c5.1,0,9.5-2.6,10-2.9c1-0.6,1.7-1.8,1.7-3C88.1,78.65,88.1,77.75,87.9,76.15z\"/>\n								</g>\n								<g id=\"main_jersey\">\n									<path class=\"svg_jersey_base\" style=\"fill:"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.away_team : stack1)) != null ? stack1.away_color : stack1), depth0))
    + ";\" d=\"M8.45,58.85c-1.2,10.101-2.1,18.5-2.2,19.8c0,0.101,0,0.199,0,0.199s7,4.4,12.7,1.301\n										c0-0.199,0.1-0.5,0.1-0.801v-0.1c0-0.2,0.1-0.5,0.1-0.8V78.35l0,0c0.6-4,1.6-11.1,2.6-17.8L8.45,58.85z M9.45,50.45L9.45,50.45\n										c-0.1,1.2-0.3,2.5-0.4,3.7l0,0c0,0.3-0.1,0.699-0.1,1l13.3,1.6c0-0.3,0.1-0.7,0.1-1c0-0.1,0-0.2,0-0.4c0-0.1,0-0.199,0-0.3\n										c0.1-1,0.3-2.1,0.4-3c0-0.2,0.1-0.5,0.1-0.7l-13.4-1.6C9.45,49.95,9.45,50.25,9.45,50.45z M46.45,17.55c0,0,8-4.5,8.3-11.6\n										c-7.7-1.7-17.6-0.1-17.6-0.1C39.45,14.35,46.45,17.55,46.45,17.55z M81.85,53.95c-0.1-1.2-0.299-2.3-0.397-3.5l0,0\n										c0-0.2-0.103-0.5-0.103-0.7l-13.398,1.6l0.1,0.7l0,0c0.2,1.2,0.3,2.4,0.5,3.7l0,0l0.1,1l13.401-1.6\n										C81.951,54.75,81.951,54.35,81.85,53.95z M80.951,46.05c-1.102-9.7-2.301-19.1-3-24c-1.5-10.2-13.901-15-19.301-16.7\n										c0.101,0.1,0.2,0.3,0.2,0.4c0,1-3.8,11.4-12.5,13.3l0.1-0.1l-0.3,0.1h-0.1l0,0c-2.5-0.5-4.6-1.8-6.3-3.3l-0.1-0.1l0,0\n										c-4.2-3.8-6.1-9.2-6.1-9.9c0-0.4,0.6-0.8,1.2-1.1h-0.2c0,0-19.8,4.4-21.7,17.3c-0.7,4.899-1.9,14.3-3,24l13.5,1.6\n										c0.3-2.6,0.6-4.3,0.6-4.3l-0.3,44.4c0,0,0.2,2.199,21.7,2.3l0,0c21.5-0.101,21.7-2.3,21.7-2.3l-0.3-44.4c0,0,0.2,1.7,0.6,4.3\n										L80.951,46.05z M84.451,76.55L84.451,76.55l-2-17.7l-13.301,1.6c0.9,6.7,1.9,13.8,2.601,17.8l0,0v0.1c0,0.2,0.1,0.4,0.1,0.7\n										c0,0.101,0,0.2,0,0.3c0,0.301,0.101,0.5,0.101,0.801c5.6,3.101,12.7-1.301,12.7-1.301S84.65,78.05,84.451,76.55z\"/>\n								</g>\n							</svg>\n						</div>\n						"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.away", {"name":"t","hash":{},"data":data})))
    + "\n					</div>\n				</div>\n			</div>\n		</a>\n	</section>\n</div>\n\n<div class=\"pre-game-summary\">\n	<div class=\"title\">\n		<h2>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "event.opponent_summary", {"name":"t","hash":{},"data":data})))
    + "</h2>\n		<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 175.333 22.667\" enable-background=\"new 0 0 175.333 22.667\"\n			 xml:space=\"preserve\">\n		<path fill=\"#0b8843\" d=\"M159.812,1.332\"/>\n		<polygon fill=\"#0b8843\" points=\"173.61,21.334 169.572,11.334 173.61,1.334 1.203,1.332 5.241,11.332 1.203,21.332 \"/>\n		</svg>\n	</div>\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.team_summary : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});



this["precompiled_templates"]["event_payment_popup"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "			<div id=\"pay_cash\" class=\"pay_line col-parent\">\n				<div class=\"col-xs-2\">\n					<i class=\"icon-cash\"></i>\n				</div>\n				<div class=\"col-xs-8\">Cash</div>\n				<div class=\"col-xs-2 price\">$"
    + escapeExpression(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"price","hash":{},"data":data}) : helper)))
    + "</div>\n			</div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<div id=\"pay_vip\" class=\"pay_line col-parent\">\n				<div class=\"col-xs-2\">\n					<i class=\"icon-hc-icon\"></i>\n				</div>\n				<div class=\"col-xs-10\">Use&nbsp;&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.credits : depth0)) != null ? stack1.credits : stack1), depth0))
    + "&nbsp;&nbsp;of your&nbsp;&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.credits : depth0)) != null ? stack1.user : stack1), depth0))
    + "&nbsp;&nbsp;VIP Credits</div>\n			</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"payment_popup_container\">\n\n	<div class=\"payment_popup_header\">\n		<div id=\"payment_close\" class=\"close_x_icon\"><i class=\"icon-close-circle\"></i></div>\n		<h4>CHOOSE PAYMENT METHOD</h4>\n		<h5>TO SECURE YOUR SPOT</h5>\n	</div>\n	<div id=\"payment_popup_interior\">\n		<div id=\"pay_online\" class=\"pay_line col-parent\">\n			<div class=\"col-xs-2\">\n				<i class=\"icon-credit-card\"></i>\n			</div>\n			<div class=\"col-xs-8\">Credit card or PayPal</div>\n			<div class=\"col-xs-2 price\">$"
    + escapeExpression(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"price","hash":{},"data":data}) : helper)))
    + "</div>\n		</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.cash : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.vip : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		<div id=\"pay_goalie\" class=\"pay_line col-parent\">\n			<div class=\"col-xs-2\">\n				<i class=\"icon-goalie\"></i>\n			</div>\n			<div class=\"col-xs-10\">Goalies play free</div>\n		</div>\n	</div>\n	<div class=\"payment_popup_footer pay_line col-parent\">\n		<div class=\"col-xs-1\">\n			<i class=\"icon-lock\"></i>\n		</div>\n		<div class=\"col-xs-4\">\n			Secure Payment\n		</div>\n		<div class=\"col-xs-7\">\n			<img src=\"stylesheets/images/paypal_128.png\">\n			<img src=\"stylesheets/images/visa_128.png\">\n			<img src=\"stylesheets/images/mastercard_128.png\">\n			<img src=\"stylesheets/images/amex_128.png\">\n		</div>\n	</div>\n</div>";
},"useData":true});



this["precompiled_templates"]["event_roster"] = Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.locals : depth0), {"name":"each","hash":{},"fn":this.program(2, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = "		<div class=\"sidebar_section\" style=\""
    + escapeExpression(((helpers.displayNumber || (depth0 && depth0.displayNumber) || helperMissing).call(depth0, (depth0 != null ? depth0.number : depth0), {"name":"displayNumber","hash":{},"data":data})))
    + "\" id=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "_container\">\n			<div class=\"sidebar_title circle_confirmed sidebar_embedded_title "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n				<div class=\"sidebar_title_text\">\n					<div class=\"sidebar_title_circle circle_confirmed\" id=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "_counter\">\n						"
    + escapeExpression(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"number","hash":{},"data":data}) : helper)))
    + "\n					</div>\n					<span>\n						"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, (depth0 != null ? depth0.header_text : depth0), {"name":"t","hash":{},"data":data})))
    + "\n					</span>\n				</div>\n			</div>\n			<div class=\"sidebar_scrolling_box";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1].is_organizer : depths[1]), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "_section\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.player_list : depth0), {"name":"each","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</div>\n		</div>\n";
},"3":function(depth0,helpers,partials,data) {
  return " organizer";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.event_attendings, '					', 'event_attendings', (depth0 != null ? depth0.user : depth0), undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.check_players || (depth0 && depth0.check_players) || helperMissing).call(depth0, depth0, {"name":"check_players","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"usePartial":true,"useData":true,"useDepths":true});



this["precompiled_templates"]["event_show"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.event_description, '				', 'event_description', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.loading, '				', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "					<div class=\"badge-large\">\n						<span class=\"num\">\n							"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.comments_count : stack1), depth0))
    + "\n						</span>\n					</div>\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "					<div class=\"badge-large\">\n						<span class=\"num\">\n							"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.attendees_count : stack1), depth0))
    + "\n						</span>\n					</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"hc_header\">\n	<button id=\"event_back_button\" type=\"button\" class=\"menu_button\"><i class=\"icon-arrow-left\"></i></button>\n	<h4 id=\"event_header\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "event", {"name":"t","hash":{},"data":data})))
    + "</h4>\n	<button type=\"submit\" class=\"menu_button right\" id=\"event_refresh_btn\">\n		<i class=\"icon-refresh\"></i>\n	</button>\n	<button class=\"menu_button right\" id=\"event_share_btn\">\n		<i class=\"icon-share3\"></i>\n	</button>\n</div>\n<div id=\"event_inner_transitions\" class=\"inner_transitions\">\n\n	<div id=\"event_description\" class=\"inner-page inner-page-current\">\n		<div id=\"event_scroller\" class=\"main_scrolling container minus_header\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.event : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n	</div>\n\n	<div id=\"event_comments\" class=\"inner-page\">\n		<section id=\"send_comment\" class=\"send_comment\">\n			<input id=\"send_comment_input\" type=\"text\" placeholder=\""
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "add_your_comment", {"name":"t","hash":{},"data":data})))
    + "\"><!--\n			--><button id=\"send_comment_button\" type=\"button\" class=\"btn btn-default\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "post", {"name":"t","hash":{},"data":data})))
    + "</button>\n		</section>\n		<div id=\"event_comment_scroller\" class=\"main_scrolling comments\">";
  stack1 = this.invokePartial(partials.loading, '', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n	</div>\n\n	<div id=\"event_roster\" class=\"inner-page\">\n		<div id=\"event_roster_scroller\" class=\"main_scrolling\">";
  stack1 = this.invokePartial(partials.loading, '', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n	</div>\n\n</div>\n\n<div id=\"event_tabs\" class=\"fixed_navbar\">\n	<div class=\"tabs_container\" data-position=\"0\">\n		<div data-position=\"0\" data-tab=\"event_description\" class=\"tab col-xs-4\">\n			<div class=\"tab_name\">\n				"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "event.info", {"name":"t","hash":{},"data":data})))
    + "\n			</div>\n		</div>\n		<div data-position=\"1\" data-tab=\"event_comments\" class=\"tab col-xs-4\">\n			<div class=\"tab_name\" id=\"fixed_tab_comments\">\n";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.comments_count : stack1), ">", 0, {"name":"iff","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "				"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "event.comments", ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.comments_count : stack1), {"name":"t","hash":{},"data":data})))
    + "\n			</div>\n		</div>\n		<div data-position=\"2\" data-tab=\"event_roster\" id=\"event_roster_tab\" class=\"tab col-xs-4\">\n			<div class=\"tab_name\" id=\"fixed_tab_attendees\">\n";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.attendees_count : stack1), ">", 0, {"name":"iff","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "event.roster", ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.attendees_count : stack1), {"name":"t","hash":{},"data":data})))
    + "\n			</div>\n		</div>\n	</div>\n</div>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["events_list"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.cards_game, '	', 'cards_game', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"usePartial":true,"useData":true});



this["precompiled_templates"]["events_show"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"hc_header\">\n	<button id=\"events_back_button\" type=\"button\" class=\"menu_button\"><i class=\"icon-arrow-left\"></i></button>\n	<h4>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "events", {"name":"t","hash":{},"data":data})))
    + "</h4>\n</div>\n\n<div id=\"events_scroller\" class=\"container main_scrolling minus_header\">\n	<div class=\"cards_container\">\n		<div class=\"form-group\">\n			<div class=\"btn-group btn-group-justified\" id=\"events_tabs_container\">\n				<div class=\"btn-group\">\n					<button type=\"button\" data-tab=\"around\" class=\"js-events-tab btn btn-default btn-primary\">\n						<div class=\"button_text\">\n							"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "events.local", {"name":"t","hash":{},"data":data})))
    + "\n						</div>\n					</button>\n				</div>\n				<div class=\"btn-group\">\n					<button type=\"button\" data-tab=\"goalies\" class=\"js-events-tab btn btn-default\">\n						<div class=\"button_text\">\n							"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "events.goalies", {"name":"t","hash":{},"data":data})))
    + "\n						</div>\n					</button>\n				</div>\n				<div class=\"btn-group\">\n					<button type=\"button\" data-tab=\"attending\" class=\"js-events-tab btn btn-default\">\n						<div class=\"button_text\">\n							"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "events.attending", {"name":"t","hash":{},"data":data})))
    + "\n						</div>\n					</button>\n				</div>\n			</div>\n		</div>\n		<div id=\"events_cards_container\">\n";
  stack1 = this.invokePartial(partials.loading, '       		', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "       	</div>\n    </div>\n</div>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["inbox_show"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"hc_header\">\n	<button id=\"inbox_back_button\" type=\"button\" class=\"menu_button\"><i class=\"icon-arrow-left\"></i></button>\n	<h4>INBOX</h3>\n</div>\n\n<div id=\"inbox_content\" class=\"main_scrolling minus_header\">\n";
  stack1 = this.invokePartial(partials.inbox_content, '	', 'inbox_content', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["login_show"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"hc_header\">\n	<button type=\"button\" id=\"login_back_button\" class=\"menu_button\"><i class=\"icon-arrow-left\"></i></button>\n	<h4 id=\"login_header\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "login.login", {"name":"t","hash":{},"data":data})))
    + "</h4>\n	<button id=\"login_submit_button\" type=\"submit\" form=\"login_form\" class=\"menu_button right\"><i class=\"icon-checkmark\"></i></button>\n</div>\n\n<form id=\"login_form\" name=\"login_form\" class=\"floating_inputs\">\n\n	<div class=\"group\">\n		<input name=\"email\" id=\"login_email\" class=\"data\" type=\"text\" title=\"Please make sure your type in your email address\" autocorrect=\"off\" autocapitalize=\"off\" required>\n		<span class=\"highlight\"></span>\n		<span class=\"bar\"></span>\n		<label>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "login.email_or_username", {"name":"t","hash":{},"data":data})))
    + "</label>\n	</div>\n\n	<div class=\"group\">\n		<input name=\"password\" id=\"login_password\" class=\"data\" type=\"password\" title=\"Make sure your caps lock isn't on\" required>\n		<span class=\"highlight\"></span>\n		<span class=\"bar\"></span>\n		<label>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "login.password", {"name":"t","hash":{},"data":data})))
    + "</label>\n	</div>\n\n	<div id=\"login_forgot_password_button\" class=\"forgot_password\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "login.forgot_your_password", {"name":"t","hash":{},"data":data})))
    + "</div>\n</form>";
},"useData":true});



this["precompiled_templates"]["messages_show"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div class=\"hc_header\">\n	<button type=\"button\" class=\"menu_button\" id='messages_back_btn'><i class=\"icon-arrow-left\"></i></button>\n	<h4 id=\"messages_header\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "loading", {"name":"t","hash":{},"data":data})))
    + "</h4>\n</div>\n\n<div class=\"main_scrolling\" id=\"messages_main_scrolling\">\n	<div class=\"messages_scroller\">\n		<div class=\"messages\" id=\"messages_container\">\n";
  stack1 = this.invokePartial(partials.loading, '			', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n	</div>\n</div>\n\n<div id=\"send_message\" class=\"send_comment\">\n	<input id=\"send_message_input\" type=\"text\" placeholder=\""
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "write_a_message", {"name":"t","hash":{},"data":data})))
    + "\" data-recipient-id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"><!--\n	--><button id=\"send_message_button\" type=\"button\" class=\"btn btn-default\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "send", {"name":"t","hash":{},"data":data})))
    + "</button>\n</div>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["newsfeed_show"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "			";
  stack1 = ((helper = (helper = helpers.html || (depth0 != null ? depth0.html : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"html","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.newsfeed : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.newsfeed : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "					";
  stack1 = ((helpers.cards_template || (depth0 && depth0.cards_template) || helperMissing).call(depth0, (depth0 != null ? depth0.template : depth0), (depth0 != null ? depth0.cached_data : depth0), {"name":"cards_template","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.loading, '				', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"hc_header\">\n	<div class=\"fake_hc_header\">\n		<div class=\"menu_button\">\n			<section class=\"si-icons si-icons-default\">\n				<span class=\"si-icon si-icon-hamburger-cross\" data-icon-name=\"hamburgerCross\" id=\"hamburgerCross\"></span>\n			</section>\n		</div>\n		<h4 id=\"newsfeed_header\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "newsfeed", {"name":"t","hash":{},"data":data})))
    + "</h4>\n		<button id=\"notifications_button\" type=\"button\" class=\"menu_button notify right\">\n			<i class=\"icon-notification\"></i>\n		</button>\n		<button id=\"inbox_button\" type=\"button\" class=\"menu_button notify right\">\n			<i class=\"icon-inbox\"></i>\n		</button>\n	</div>\n\n	<button id=\"refresh_newsfeed\" type=\"button\"><i class=\"icon-refresh\"></i>&nbsp;&nbsp;<span id=\"newsfeed_refresh_text\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "refresh", {"name":"t","hash":{},"data":data})))
    + "</span></button>\n</div>\n\n<div id=\"hc_sidemenu\" align=\"left\"></div>\n<div id=\"menu_overlay\"></div>\n\n<div id=\"newsfeed_loader\"></div>\n\n<div id=\"newsfeed_scroller\" class=\"container main_scrolling minus_header\">\n	<div id=\"cards_container\" class=\"cards_container\">\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.html : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\n</div>\n\n<div id=\"post_form_overlay\">\n\n	<button type=\"button\" class=\"post_buttons post_button_0\" data-title=\""
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "postform.post", {"name":"t","hash":{},"data":data})))
    + "\" data-type=\"status\" data-page-id=\"postform_status\" data-placeholder=\""
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "postform.post_placeholder", {"name":"t","hash":{},"data":data})))
    + "\">\n		<i class=\"icon-post-chat-2\"></i>\n	</button>\n\n	<button type=\"button\" class=\"post_buttons post_button_1\" data-title=\""
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "postform.check_in", {"name":"t","hash":{},"data":data})))
    + "\" data-type=\"checkin\" data-page-id=\"postform_status\" data-placeholder=\""
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "postform.check_in_placeholder", {"name":"t","hash":{},"data":data})))
    + "\">\n		<i class=\"icon-location\"></i>\n	</button>\n\n	<button type=\"button\" class=\"post_buttons post_button_2\" data-title=\""
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "postform.add_an_event", {"name":"t","hash":{},"data":data})))
    + "\" data-type=\"event\" data-page-id=\"postform_event\">\n		<i class=\"icon-calendar\"></i>\n	</button>\n\n	<button type=\"button\" class=\"post_buttons post_button_3\" data-title=\""
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "postform.request_a_goalie", {"name":"t","hash":{},"data":data})))
    + "\" data-type=\"goalie\" data-page-id=\"postform_event\">\n		<i class=\"icon-goalie\"></i>\n	</button>\n\n	<button type=\"button\" class=\"post_buttons post_button_4\" data-title=\"GEAR\" data-type=\"gear\" data-page-id=\"postform_status\" data-placeholder=\"What are you selling? ... condition? ... how much?\">\n		<i class=\"fa-suitcase\"></i>\n	</button>\n\n	<button type=\"button\" class=\"post_buttons post_button_5\" data-title=\"TEAM FINDER\" data-type=\"\">\n		<i class=\"fa-users\"></i>\n	</button>\n\n\n</div>\n\n<button id=\"post_button\" type=\"button\">\n	<section class=\"si-icons si-icons-default\">\n		<span class=\"si-icon si-icon-plus\" data-icon-name=\"plus\" id=\"plusSvg\"></span>\n	</section>\n</button>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["notifications_show"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"hc_header\">\n	<button id=\"notifications_back_button\" class=\"menu_button\">\n		<i class=\"icon-arrow-left\"></i>\n	</button>\n	<h4>\n		"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "notifications", {"name":"t","hash":{},"data":data})))
    + "\n	</h4>\n</div>\n\n<div id=\"notifications_content\" class=\"main_scrolling minus_header\">\n	\n";
  stack1 = this.invokePartial(partials.notifications_content, '	', 'notifications_content', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</div>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["postform_event_show"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "				<div class=\"more_options_wrapper\">\n					<button id=\"more_options_button\" type=\"button\">\n						<i id=\"more_options_button_icon\" class=\"icon-plus-circle\"></i>\n						<span id=\"more_options_button_text\">MORE OPTIONS</span>\n					</button>\n				</div>\n\n				<div class=\"group\">\n					<input id=\"postform_price\" name=\"price\" value=\"$0.00\" type=\"text\" required/>\n				  	<span class=\"highlight\"></span>\n				  	<span class=\"bar\"></span>\n				  	<label>Cost of event</label>\n				</div>\n				<div class=\"group relative\">\n				  	<input name=\"nb_players\" class=\"data\"  id=\"nb_players_input\" type=\"text\" value=\"20\"/>\n				  	<span class=\"highlight\"></span>\n				  	<span class=\"bar\"></span>\n				  	<label>Amount of players needed</label>\n				  	<select id=\"nb_players_select\" class=\"hidden_select\">\n				  		<option value=\"0\">0</option>\n				  		<option value=\"1\">1</option>\n				  		<option value=\"2\">2</option>\n				  		<option value=\"3\">3</option>\n				  		<option value=\"4\">4</option>\n				  		<option value=\"5\">5</option>\n				  		<option value=\"6\">6</option>\n				  		<option value=\"7\">7</option>\n				  		<option value=\"8\">8</option>\n				  		<option value=\"9\">9</option>\n				  		<option value=\"10\">10</option>\n				  		<option value=\"11\">11</option>\n				  		<option value=\"12\">12</option>\n				  		<option value=\"13\">13</option>\n				  		<option value=\"14\">14</option>\n				  		<option value=\"15\">15</option>\n				  		<option value=\"16\">16</option>\n				  		<option value=\"17\">17</option>\n				  		<option value=\"18\">18</option>\n				  		<option value=\"19\">19</option>\n				  		<option value=\"20\" selected>20</option>\n				  		<option value=\"21\">21</option>\n				  		<option value=\"22\">22</option>\n				  		<option value=\"23\">23</option>\n				  		<option value=\"24\">24</option>\n				  		<option value=\"25\">25</option>\n				  		<option value=\"26\">26</option>\n				  		<option value=\"27\">27</option>\n				  		<option value=\"28\">28</option>\n				  		<option value=\"29\">29</option>\n				  		<option value=\"30\">30</option>\n				  	</select>\n				</div>\n				<div class=\"group relative\">\n				  	<input name=\"nb_goalies\" class=\"data\" id=\"nb_goalies_input\" type=\"text\" value=\"0\"/>\n				  	<span class=\"highlight\"></span>\n				  	<span class=\"bar\"></span>\n				  	<label>Amount of goalies needed</label>\n				  	<select id=\"nb_goalies_select\" class=\"hidden_select\">\n				  	  	<option value=\"0\" selected>0</option>\n				  	  	<option value=\"1\">1</option>\n				  	  	<option value=\"2\">2</option>\n				  	  	<option value=\"2\">3</option>\n				  	  	<option value=\"2\">4</option>\n				  	</select>\n				</div>\n				<div class=\"row\">\n					<div class=\"col-xs-12\">\n						<label class=\"material-design\" for=\"online_payments\">\n							<span class=\"radio_label\">Accept online payments </span>\n							<input id=\"online_payments\" name=\"payment_required\" class=\"cmn-toggle cmn-toggle-round-flat\" type=\"checkbox\">\n							<span class=\"outer\"><span class=\"inner\"></span></span>\n						</label>\n					</div>\n				</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"hc_header\">\n	<button id=\"postform_event_back_button\" type=\"button\" class=\"menu_button cancel\"><i class=\"icon-close-sml\"></i></button>\n	<h4>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n	<button type=\"submit\" id=\"postform_event_submit\" form=\"postform_event_form\" class=\"menu_button right\"><i class=\"icon-checkmark\"></i></button>\n</div>\n\n<form id=\"postform_event_form\" data-submitting=\"false\">\n	<div id=\"postform_scroll\" class=\"main_scrolling minus_header\">\n\n		<div id=\"postform_main_options\" class=\"container floating_inputs\" data-height=\"365\" data-more-options=\"false\">\n			<div class=\"group\">\n				<input name=\"title\" class=\"data\" type=\"text\" title=\"select an appropriate title for your event\" required/>\n				<span class=\"highlight\"></span>\n				<span class=\"bar\"></span>\n				<label>Event title</label>\n			</div>\n\n			<div class=\"group\">\n			  	<textarea name=\"description\" class=\"data\" rows=\"1\" maxlength=\"1000\" type=\"text\" title=\"with a descriptive summary of the event\" required></textarea>\n			  	<span class=\"highlight\"></span>\n			  	<span class=\"bar\"></span>\n			  	<label>Description (skill level, price, etc.)</label>\n			</div>\n\n			<div class=\"group\" id=\"post_date_group\">\n			  	<input id=\"post_date_time\" type=\"text\" required/>\n			  	<input id=\"post_date_time_data\" class=\"data\" type=\"hidden\" name=\"start_time\" required/>\n			  	<span class=\"highlight\"></span>\n			  	<span class=\"bar\"></span>\n			  	<label>Date and time</label>\n			</div>\n\n			<div class=\"group\">\n			  	<input id=\"rink_select\" name=\"rink\" type=\"text\" title=\"click here to select a rink\" required/>\n			  	<input id=\"rink_select_id\" class=\"data\" name=\"rink_id\" type=\"hidden\" required/>\n			  	<span class=\"highlight\"></span>\n			  	<span class=\"bar\"></span>\n			  	<label>Arena</label>\n			</div>\n\n			<div class=\"group relative\">\n			  	<input name=\"sport\" id=\"type_input\" type=\"text\" required=\"true\" value=\"Ice Hockey\"/>\n			  	<input name=\"sport_id\" class=\"data\" id=\"sport_id\" type=\"hidden\" required=\"true\" value=\"1\"/>\n			  	<span class=\"highlight\"></span>\n			  	<span class=\"bar\"></span>\n			  	<label>Type of hockey</label>\n			  	<select id=\"type_select\" class=\"hidden_select\">\n			  	  	<option value=\"1\" selected>Ice hockey</option>\n			  	  	<option value=\"2\">Roller hockey</option>\n			  	  	<option value=\"3\">Ball hockey</option>\n			  	</select>\n			</div>\n\n";
  stack1 = ((helpers.is || (depth0 && depth0.is) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), "event", {"name":"is","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n	</div>\n</form>";
},"useData":true});



this["precompiled_templates"]["postform_rink_lines"] = Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "	<div class=\"js-rink-line rink_line col-parent\" data-rink-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\">\n		<div class=\"col-xs-1\">\n			<i class=\"icon-faceoff-rink\"></i>\n		</div>\n		<div class=\"col-xs-11 rink_info\">\n			<div class=\"name ellipsis\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n			<div class=\"city\">"
    + escapeExpression(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"city","hash":{},"data":data}) : helper)))
    + "</div>\n		</div>\n	</div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.empty_page, '	', 'empty_page', depth0, {
    'message': ("No results were found, please try again or email our team at support@hockey-community.com with your arena's information.")
  }, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rinks : depth0), {"name":"each","hash":{},"fn":this.program(1, data, depths),"inverse":this.program(3, data, depths),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"usePartial":true,"useData":true,"useDepths":true});



this["precompiled_templates"]["postform_rink_popup"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.postform_rink_lines, '			', 'postform_rink_lines', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"close_rink_popup\" class=\"close_x_icon\"><i class=\"icon-close-circle\"></i></div>\n<div class=\"rink_popup\">\n	<div class=\"rink_search_container\">\n		<i class=\"icon-search\"></i>\n		<input type=\"text\" id=\"rink_search\" placeholder=\"Search for an arena...\"/>\n	</div>\n	<div id=\"rink_search_results\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.rinks : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\n</div>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["postform_status_show"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "			<div class=\"group\">\n			  	<input id=\"rink_status\" name=\"rink\" type=\"text\" title=\"click here to select a rink\" required/>\n			  	<input id=\"rink_status_id\" class=\"data\" name=\"rink_id\" type=\"hidden\" required/>\n			  	<span class=\"highlight\"></span>\n			  	<span class=\"bar\"></span>\n			  	<label>Which arena are you at?</label>\n			</div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"hc_header\">\n	<button id=\"postform_status_back_button\" type=\"button\" class=\"menu_button cancel\"><i class=\"icon-close-sml\"></i></button>\n	<h4 id=\"postform-status-header\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n	<button type=\"submit\" id=\"postform_status_submit\" form=\"postform_status_form\" class=\"menu_button right\"><i class=\"icon-checkmark\"></i></button>\n</div>\n\n<form id=\"postform_status_form\" class=\"floating_inputs\" data-submitting=\"false\">\n	<div class=\"main_content col-parent\">\n\n		<div class=\"col-xs-2\">\n			<div id=\"postform_photo_upload\">\n				<i class=\"icon-add-photo\"></i>\n			</div>\n";
  stack1 = this.invokePartial(partials.photo_loader, '			', 'photo_loader', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n		<div class=\"col-xs-10\"><textarea maxlength=\"500\" data-type=\""
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "\" class=\"data\" placeholder=\""
    + escapeExpression(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" name=\"message\" title=\"a short description\" required></textarea></div>\n\n";
  stack1 = ((helpers.is || (depth0 && depth0.is) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), "checkin", {"name":"is","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\n\n</form>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["preferences_eula"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"inner_content\">\n\n	<div class=\"main_scrolling\">\n		<h2>Terms of Service</h2>\n\n		<p>Welcome to the End-User License Agreement for “Hockey Community”, a service provided by OKI Technologies Inc. (Address: 308 E. 5th Ave, Vancouver, BC, Canada, V5T 1H4).</p>\n		<p>This End-User License Agreement (this “Agreement”) describes the terms of service under which you may access the Hockey Community website. Before you can use Hockey Community, you must read and accept all of the terms and conditions of this Agreement and the Hockey Community Privacy Policy.</p>\n		<p>This Agreement sets out the legally binding terms of your use of Hockey Community. In the event of any inconsistency between the Privacy Policy and this Agreement, this Agreement shall control. As used in this Agreement, the terms “you”, “your”, “user”, or \"member\" all refer to the person or entity that uses, becomes a member of, or accesses Hockey Community. Nothing in this Agreement shall be deemed to confer any rights or benefits to any third parties. If you do not agree to be bound by the terms of this Agreement, you may not use, subscribe to, or participate in Hockey Community.</p>\n		<p>Hockey Community reserves the right to modify this Agreement at any time, and without prior notice, by posting any such amended terms on its website. Your continued use of Hockey Community indicates your acceptance of the amended Agreement, and you are responsible for reviewing such amended terms and conditions from time to time.</p>\n\n		<h2>Description of Service</h2>\n\n		<p>Hockey Community provides memberships to users to allow them to access a network and database of hockey related contacts and information. Members can view and add information to the database.</p>\n\n		<h2>Third Parties</h2>\n\n		<p>Hockey Community is not responsible for any content provided by the Third Parties, and their separate Terms of Service and Privacy Policies govern your participation in their programs. Members are solely responsible for any charges incurred by participation in Third-Party programs.</p>\n\n		<h2>Member Obligations</h2>\n\n		<p>In consideration of your membership and access to Hockey Community, you agree:</p>\n		<li>To comply with all local, provincial/state, federal, international or other applicable laws, including but not limited to, rules regarding acceptable online conduct, and not to use Hockey Community to participate in any fraudulent, illegal, or patently unethical activities;</li>\n		<li>Not to participate in any illegal activities with the intention of advertising or mentioning Hockey Community or that relate to the Hockey Community Program in any way, including but not limited to, “spamming” your Hockey Community URL via email, on message boards, social networking sites, or anywhere else;</li>\n		<li>To have only one Hockey Community membership and account and not to attempt to open multiple accounts or memberships, as Hockey Community only allows one account per person;</li>\n		<li>Not to post content or to initiate communications on the Hockey Community website, which are unlawful, defamatory, abusive, obscene, indecent, discriminatory, or otherwise objectionable;</li>\n		<li>Not to modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer or sell any information, software, products or services obtained from Hockey Community’s website or the Hockey Community Program without Hockey Community’s prior written approval;</li>\n		<li>Not to upload, post, email, transmit or otherwise make available any material that contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment;</li>\n		<li>Not to abuse, stalk, threaten or harass anyone or otherwise violate the legal rights (such as the rights of privacy and publicity) of others in your use of The Hockey Community; and</li>\n\n		<p>IF ANY MEMBER IS FOUND, IN THE SOLE DISCRETION OF HOCKEY COMMUNITY, TO BE IN VIOLATION OF THE ABOVE REQUIREMENTS, HIS OR HER ACCOUNT WILL BE TERMINATED AND HE OR SHE WILL BE REMOVED FROM THE HOCKEY COMMUNITY.</p>\n\n		<h2>Limitation of Liability</h2>\n\n		<p>You expressly understand and agree that Hockey Community shall not be liable for any direct, indirect, incidental, punitive, special, consequential or exemplary damages, including, but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses (even if Hockey Community has been advised of the possibility of such damages) arising out of or in any way connected with your use of or performance of Hockey Community, whether based on contract, tort, negligence or strict liability. If you are dissatisfied with any portion of Hockey Community, your sole and exclusive remedy is to discontinue using Hockey Community.</p>\n\n		<h2>Non-Commitment</h2>\n\n		<p>Hockey Community does not have any commitment toward any Members, past or present. Hockey Community may at anytime, for any reason, with or without notice, discontinue Hockey Community for one or all of its Members. After said discontinuation, Hockey Community remains without commitment to any Members, past or present, of Hockey Community.\n		Identity</p>\n		<p>In order to use Hockey Community, you must use your real first name however you may use a shortened version of your last name if you wish. You may not create more than one account per individual. Business accounts aren't considered as individuals but are also required to use the company's registered name.</p>\n		<p>A 24-hour notice will be sent by email listing the changes required to comply with our terms. Hockey Community may terminate your account if those conditions are not respected and the deadline has passed.\n\n		<h2>Data</h2>\n		<p>You expressly understand and agree in order to function, Hockey Community stores data that you may post on HC but also the pages you visit and some of your clicks that will help the research team improve your design experience. Your password is encrypted and can not be accessed by any of our staff members or the public.</p>\n\n		<h2>Indemnity</h2>\n\n		<p>By accepting the terms of this Agreement, you agree to indemnify, defend and otherwise hold harmless Hockey Community, its officers, employees, agents, subsidiaries, affiliates and other partners from any direct, indirect, incidental, special, consequential, punitive or exemplary damages resulting from: (i) your membership and/or participation in Hockey Community; (ii) your use of the Hockey Community website and name; (iii) your violation of this Agreement; (iv) your violation of the rights of another; and (v) any other matter relating to Hockey Community. Any communications and/or transactions which arise between a Member and the Third-Parties, between Members, or between any Member and other users of the Hockey Community website are the sole responsibility of the parties to those communications and/or transactions, and Hockey Community shall not be considered a party to any such communications and/or transactions.</p>\n\n		<h2>Monitoring and Enforcement</h2>\n\n		<p>While Hockey Community has the right to monitor activity and content associated with the site, Hockey Community is not obligated to do so. Since Hockey Community does not, and may not have the ability to, control or actively monitor content posted by Members or users on the Hockey Community website, Hockey Community does not guarantee content accuracy, integrity or quality. Because community standards vary and individuals may sometimes choose not to comply with Hockey Community’s policies and practices, in the process of using the Hockey Community website, you may be exposed to content that you find offensive or objectionable. You can contact Hockey Community regarding the content that you find objectionable. Hockey Community may investigate complaints and violations of Hockey Community’s policies that come to Hockey Community’s attention and may take action that Hockey Community believes is appropriate, including but not limited to, issuing warnings, removing the content or terminating accounts and/or memberships. However, because situations and interpretations vary, Hockey Community also reserves the right not to take any action. As a user of Hockey Community, you acknowledge and agree that under no circumstances will Hockey Community be liable in any way for any content, including but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of, access to, or denial of access to any content on the Hockey Community website.</p>\n\n		<h2>Disclaimer of Warranties</h2>\n\n		<p>You understand and agree that Hockey Community is provided on an “as is” and “as available” basis.\n		Hockey Community makes no warranty that: (i) Hockey Community will meet your requirements; (ii) Hockey Community will be uninterrupted, timely, secure, or error-free; (iii) the results that may be obtained from use of Hockey Community will be accurate or reliable; (iv) the quality of any products, services, information, or other material purchased or obtained by you through Hockey Community will meet your expectations and; (v) any errors in Hockey Community will be corrected.</p>\n\n		<h2>Privacy Policy</h2>\n\n		<p>This Privacy Policy may be modified at anytime without notice.</p>\n\n		<h2>Personal Information</h2>\n\n		<p>Hockey Community will collect your name, location, and email when you sign up. This information will not be sold or traded to anyone without notification and consent. Your name, location (city), and activity will be viewable by other members of the Hockey Community if you use the services we provide.  Your email will only be viewable to other members, if you use the your \"Hockey Community\" features.</p>\n\n		<p>If you sign in using Facebook, we will have access to the information that Facebook provides.  This information will only be used to enhance the experience of Hockey Community for you and your friends.  If you have more questions about privacy with your Facebook information, please review the Facebook privacy policy.</p>\n\n		<h2>Email</h2>\n\n		<p>Hockey Community respects your email privacy, and will contact you for reasons including, but not limited to: administrative reasons, announcements, support and contest winnings.</p>\n\n		<h2>Security</h2>\n\n		<p>Hockey Community contains links to other websites. Hockey Community is not responsible for the privacy practices or the content of these websites. Please ensure you review the privacy policies of these websites.</p>\n\n		<p>Hockey Community protects against the loss, misuse, and alteration of personal information with security measures appropriate to the sensitivity of the information. However, it is possible that any information transmitted via the Internet may be intercepted by unknown third parties.</p>\n\n	</div>\n	<div class=\"actions\">\n		<button id=\"eula_agree\">I AGREE</button>\n		<button id=\"eula_disagree\">I DISAGREE</button>\n	</div>\n</div>";
  },"useData":true});



this["precompiled_templates"]["preferences_notifications_show"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"hc_header\">\n\n	<button type=\"button\" class=\"back menu_button\" id=\"notification_settings_back_btn\">\n		<i class=\"icon-arrow-left\"></i>\n	</button>\n\n	<h4 id=\"notification_settings_header\">\n		NOTIFICATION SETTINGS\n	</h4>\n\n	<button type=\"submit\" form=\"user_preferences\" class=\"menu_button right\" id=\"notification_settings_submit_btn\">\n		<i class=\"icon-checkmark\"></i>\n	</button>\n</div>\n\n<div class=\"main_scrolling minus_header\">\n	<div class=\"cards_container container\" id=\"notification_settings_content\">\n";
  stack1 = this.invokePartial(partials.loading, '		', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\n</div>\n";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["preferences_show"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n		<h4 id=\"preferences_header\">\n			"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "login.sign_up", {"name":"t","hash":{},"data":data})))
    + "\n		</h4>\n\n";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n		<h4 id=\"preferences_header\">\n			"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "your_account", {"name":"t","hash":{},"data":data})))
    + "\n		</h4>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"hc_header\">\n\n	<button id=\"preferences_back_button\" type=\"button\" class=\"back menu_button\">\n		<i class=\"icon-arrow-left\"></i>\n	</button>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.first_time_user : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<button id=\"preferences_submit_button\" type=\"submit\" form=\"user_preferences\" class=\"menu_button right\">\n		<i class=\"icon-checkmark\"></i>\n	</button>\n</div>\n\n<div class=\"main_scrolling minus_header container\">\n	<div class=\"cards_container\">\n		<form id=\"user_preferences\">\n";
  stack1 = this.invokePartial(partials.cards_user_preferences, '			', 'cards_user_preferences', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</form>\n	</div>\n</div>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["status_show"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.cards_status, '		', 'cards_status', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.loading, '		', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"hc_header\">\n	<button id=\"status_back_button\" type=\"button\" class=\"menu_button\"><i class=\"icon-arrow-left\"></i></button>\n	<h4 id=\"status_header\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "status.status", {"name":"t","hash":{},"data":data})))
    + "</h4>\n</div>\n\n<div id=\"status_show_container\" class=\"container main_scrolling minus_header\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.link : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["team_edit_roster_show"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "			"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.edit_player", {"name":"t","hash":{},"data":data})))
    + "\n";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "			"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.add_player", {"name":"t","hash":{},"data":data})))
    + "\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "		<div id=\"edit_roster_main_options\" class=\"hide\">\n			<input name=\"email\" id=\"edit_roster_email_input\" class=\"data\" type=\"email\" title=\"Please type in the players email, or use the name field to search.\"/>\n			<input name=\"name\" id=\"edit_roster_full_name_input\" class=\"data\" type=\"text\" title=\"Please type in the players full name\"/>\n		</div>\n\n		<div id=\"edit_roster_player_found\" class=\"expanded\">\n";
  stack1 = this.invokePartial(partials.player_search_results, '			', 'player_search_results', (depth0 != null ? depth0.player : depth0), undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n";
},"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		<div id=\"edit_roster_main_options\">\n			<div class=\"group\">\n				<input name=\"email\" id=\"edit_roster_email_input\" class=\"data\" type=\"email\" title=\"Please type in the players email, or use the name field to search.\" required/>\n				<span class=\"highlight\"></span>\n				<span class=\"bar\"></span>\n				<label>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "email", {"name":"t","hash":{},"data":data})))
    + "</label>\n			</div>\n\n			<div class=\"group\">\n				<input name=\"name\" id=\"edit_roster_full_name_input\" class=\"data\" type=\"text\" title=\"Please type in the players full name\" required/>\n				<span class=\"highlight\"></span>\n				<span class=\"bar\"></span>\n				<label>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "full_name", {"name":"t","hash":{},"data":data})))
    + "</label>\n			</div>\n\n		</div>\n\n		<div id=\"edit_roster_player_found\"></div>\n		<div id=\"edit_roster_search_results\"></div>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		<div class=\"center\">\n			<button type=\"button\" id=\"delete_player\" class=\"btn btn-danger\" data-position=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.position : stack1), depth0))
    + "\" data-membership-id=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.membership_id : stack1), depth0))
    + "\"><i class=\"icon-close-lrg\"></i>Remove player</button>\n		</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"hc_header\">\n\n	<button type=\"button\" id=\"edit_roster_cancel_button\" class=\"menu_button cancel\"><i class=\"icon-close-sml\"></i></button>\n\n	<h4 id=\"edit_roster_header\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.player : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</h3>\n\n	<button type=\"submit\" form=\"edit_roster_form\" class=\"menu_button right\"><i class=\"icon-checkmark\"></i></button>\n</div>\n\n<form id=\"edit_roster_form\" class=\"floating_inputs\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.player : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<div class=\"group relative valid\">\n	  	<input name=\"position\" id=\"position_input\" class=\"data\" type=\"text\" data-position=\""
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, (depth0 != null ? depth0.player : depth0), ((stack1 = ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.position : stack1), "Centre", {"name":"ifelse","hash":{},"data":data})))
    + "\" value=\""
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, (depth0 != null ? depth0.player : depth0), ((stack1 = ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.position : stack1), "Centre", {"name":"ifelse","hash":{},"data":data})))
    + "\" readonly=\"true\" required/>\n	  	<span class=\"highlight\"></span>\n	  	<span class=\"bar\"></span>\n	  	<label>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "position", {"name":"t","hash":{},"data":data})))
    + "</label>\n	  	<select id=\"position_select\" class=\"hidden_select\">\n	  		<option value=\"Left Wing\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.left_wing", {"name":"t","hash":{},"data":data})))
    + "</option>\n	  		<option value=\"Centre\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.center", {"name":"t","hash":{},"data":data})))
    + "</option>\n	  		<option value=\"Right Wing\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.right_wing", {"name":"t","hash":{},"data":data})))
    + "</option>\n	  		<option value=\"Left Defence\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.left_defence", {"name":"t","hash":{},"data":data})))
    + "</option>\n	  		<option value=\"Right Defence\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.right_wing", {"name":"t","hash":{},"data":data})))
    + "</option>\n	  		<option value=\"Goalie\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "positions.goalie", {"name":"t","hash":{},"data":data})))
    + "</option>\n	  	</select>\n	</div>\n\n	<div class=\"group\">\n		<input id=\"jersey_number\" type=\"number\" pattern=\"[0-9]{1,3}\" class=\"data\" name=\"number\" min=\"0\" max=\"999\" value=\""
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, (depth0 != null ? depth0.player : depth0), ((stack1 = ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.number : stack1), "", {"name":"ifelse","hash":{},"data":data})))
    + "\" title=\"Please enter the player's number from 0-99\" required/>\n		<span class=\"highlight\"></span>\n		<span class=\"bar\"></span>\n		<label>"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.jersey_number", {"name":"t","hash":{},"data":data})))
    + "</label>\n	</div>\n\n	<div class=\"settings_group\">\n		<div class=\"settings_title\">\n			"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.leadership_role", {"name":"t","hash":{},"data":data})))
    + "\n		</div>\n		<div class=\"form-group col-parent\">\n			<div class=\"col-xs-6\">\n				<label class=\"material-design\">\n				  <input id=\"edit_roster_captain\" type=\"radio\" name=\"captaincy\">\n				  <span class=\"outer\"><span class=\"inner\"></span></span><span class=\"radio_label\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.captain", {"name":"t","hash":{},"data":data})))
    + "</span>\n				</label>\n			</div>\n			<div class=\"col-xs-6\">\n				<label class=\"material-design\">\n				  <input id=\"edit_roster_alt_captain\" type=\"radio\" name=\"captaincy\">\n				  <span class=\"outer\"><span class=\"inner\"></span></span><span class=\"radio_label\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.alternate", {"name":"t","hash":{},"data":data})))
    + "</span>\n				</label>\n			</div>\n		</div>\n	</div>\n\n	<div class=\"settings_group\">\n		<div class=\"settings_title\">\n			"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.roster_status", {"name":"t","hash":{},"data":data})))
    + "\n		</div>\n		<div class=\"form-group col-parent\">\n			<div class=\"col-xs-6\">\n				<label class=\"material-design\">\n				  <input type=\"radio\" name=\"roster_status\" "
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.spare : stack1), "", "checked", {"name":"ifelse","hash":{},"data":data})))
    + ">\n				  <span class=\"outer\"><span class=\"inner\"></span></span><span class=\"radio_label\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.full_time", {"name":"t","hash":{},"data":data})))
    + "</span>\n				</label>\n			</div>\n			<div class=\"col-xs-6\">\n				<label class=\"material-design\">\n				  <input type=\"radio\" name=\"roster_status\" "
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.spare : stack1), "checked", "", {"name":"ifelse","hash":{},"data":data})))
    + ">\n				  <span class=\"outer\"><span class=\"inner\"></span></span><span class=\"radio_label\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.spare", {"name":"t","hash":{},"data":data})))
    + "</span>\n				</label>\n			</div>\n		</div>\n	</div>\n";
  stack1 = ((helpers.iff || (depth0 && depth0.iff) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.can_remove_players : stack1), "&&", (depth0 != null ? depth0.remove_player : depth0), {"name":"iff","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</form>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["team_show"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "			"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "loading", {"name":"t","hash":{},"data":data})))
    + "\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.cards_team_roster, '				', 'cards_team_roster', (depth0 != null ? depth0.team : depth0), undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.loading, '				', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\"team_header\" class=\"hc_header\">\n	<button id=\"team_back_button\" type=\"button\" id=\"team_back\" class=\"menu_button\"><i class=\"icon-arrow-left\"></i></button>\n\n	<h4 id=\"team_header_text\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.team : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</h3>\n</div>\n\n<div id=\"team_inner_transitions\" class=\"inner_transitions\">\n\n	<div id=\"team_schedule\" class=\"inner-page\">\n		<div id=\"team_schedule_scroller\" class=\"main_scrolling container\">\n			<div id=\"team_schedule_content\" class=\"cards_container\">\n";
  stack1 = this.invokePartial(partials.loading, '				', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</div>\n		</div>\n	</div>\n\n	<div id=\"team_roster\" class=\"inner-page inner-page-current\">\n		<div id=\"team_roster_scroller\" class=\"main_scrolling\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.team : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n	</div>\n\n	<div id=\"team_standings\" class=\"inner-page\">\n		<div id=\"team_standings_scroller\" class=\"main_scrolling\">\n			<div id=\"team_standings_content\" class=\"container cards_container\">\n";
  stack1 = this.invokePartial(partials.loading, '				', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</div>\n		</div>\n	</div>\n\n	<!--\n	<div id=\"team_locker_room\" class=\"inner-page\">\n		<section id=\"team_send_comment\" class=\"send_comment\">\n			<div class=\"col-xs-9\">\n				<input id=\"team_send_comment_input\" type=\"text\" placeholder=\"Add your comment\">\n			</div>\n			<div class=\"col-xs-3\">\n				<button id=\"team_send_comment_button\" class=\"btn btn-default\">POST</button>\n			</div>\n			<div class=\"clear\"></div>\n		</section>\n		<div id=\"team_comment_scroller\" class=\"main_scrolling comments\">";
  stack1 = this.invokePartial(partials.loading, '', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n	</div>\n	-->\n\n	<!--\n	<div id=\"team_payments\" class=\"inner-page\">\n		<div id=\"team_payments_scroller\" class=\"main_scrolling\">\n		</div>\n	</div>\n	-->\n\n\n</div>\n\n<div id=\"team_tabs\" class=\"fixed_navbar\">\n	<div class=\"tabs_container highlight_1\" data-position=\"1\">\n		<div data-position=\"0\" data-tab=\"team_schedule\" class=\"tab col-xs-4\">\n			<div class=\"tab_name\">\n				"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.schedule", {"name":"t","hash":{},"data":data})))
    + "\n			</div>\n		</div>\n		<div data-position=\"1\" data-tab=\"team_roster\" class=\"tab col-xs-4\">\n			<div class=\"tab_name\">\n				"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.roster", {"name":"t","hash":{},"data":data})))
    + "\n			</div>\n		</div>\n		<div data-position=\"2\" data-tab=\"team_standings\" class=\"tab col-xs-4\">\n			<div class=\"tab_name\">\n				"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "teams.standings", {"name":"t","hash":{},"data":data})))
    + "\n			</div>\n		</div>\n		<!--\n		<div data-position=\"3\" data-tab=\"team_locker_room\" class=\"tab col-xs-4\">LOCKER ROOM</div>\n		<div data-position=\"4\" data-tab=\"team_payments\" class=\"tab col-xs-4\">PAYMENTS</div>\n		-->\n	</div>\n</div>";
},"usePartial":true,"useData":true});



this["precompiled_templates"]["title_show"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"hc_logo\">\n	<img src=\"stylesheets/images/logo-with-slogan.png\">\n</div>\n<div class=\"homescreen_buttons\">\n	<div class=\"large\">\n		<button type=\"button\" id=\"facebook_signup\" class=\"facebook_signup homescreen_button\">\n			<div class=\"icon\"><i class=\"icon-facebook\"></i></div>\n			<div class=\"text\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "login.quick_access_with", {"name":"t","hash":{},"data":data})))
    + "</div>\n		</button>\n	</div>\n	<div class=\"small\">\n		<button id=\"sign_up_button\" class=\"email homescreen_button\">\n			<div class=\"text\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "login.sign_up", {"name":"t","hash":{},"data":data})))
    + "</div>\n		</button>\n		<a mobile-href=\"/login\" class=\"login homescreen_button\">\n			<div class=\"text\">"
    + escapeExpression(((helpers.t || (depth0 && depth0.t) || helperMissing).call(depth0, "login.login", {"name":"t","hash":{},"data":data})))
    + "</div>\n		</a>\n	</div>\n</div>";
},"useData":true});



this["precompiled_templates"]["user_show"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "		<button type=\"button\" class=\"menu_button right\" id=\"user_inbox_btn\">\n			<i class=\"icon-send-mssg\"></i>\n		</button>\n";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = this.invokePartial(partials.cards_user_header, '		', 'cards_user_header', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n		<div id=\"user_inner_transitions\" class=\"inner_transitions\">\n\n			<div id=\"user_posts\" class=\"inner-page inner-page-current\">\n				<div class=\"container\">\n					<div id=\"user_cards_container\" class=\"cards_container\">\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.cards : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "					</div>\n				</div>\n			</div>\n\n			<div id=\"user_career\" class=\"inner-page\">\n				<div class=\"container\">\n					<div class=\"cards_container\">\n";
  stack1 = this.invokePartial(partials.cards_user_career, '						', 'cards_user_career', (depth0 != null ? depth0.user : depth0), undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "					</div>\n				</div>\n			</div>\n\n			<div id=\"user_teams\" class=\"inner-page\">\n";
  stack1 = this.invokePartial(partials.cards_user_teams, '				', 'cards_user_teams', (depth0 != null ? depth0.user : depth0), undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</div>\n		</div>\n\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.cards : stack1), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "								"
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, (depth0 != null ? depth0.template : depth0), (depth0 != null ? depth0.cached_data : depth0), {"name":"partial","hash":{},"data":data})))
    + "\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n							<div class=\"empty_results\">\n								<i class=\"icon-sad\"></i>\n\n								No posts yet.\n								<p>"
    + escapeExpression(((helpers.ifelse || (depth0 && depth0.ifelse) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.surname : stack1), ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.surname : stack1), ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), {"name":"ifelse","hash":{},"data":data})))
    + " is probably too busy playing hockey.</p>\n\n							</div>\n\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.user : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = this.invokePartial(partials.cards_user_header, '			', 'cards_user_header', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			<div id=\"user_inner_transitions\" class=\"inner_transitions\">\n\n				<div id=\"user_posts\" class=\"inner-page inner-page-current\">\n					<div class=\"container\">\n						<div id=\"user_cards_container\" class=\"cards_container\">\n";
  stack1 = this.invokePartial(partials.loading, '							', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "						</div>\n					</div>\n				</div>\n			</div>\n\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.loading, '			', 'loading', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<div id=\"user_header\" class=\"hc_header clear_header\">\n	<button id=\"user_back_button\" type=\"button\" class=\"menu_button\" id=\"user_back_button\"><i class=\"icon-arrow-left\"></i></button>\n	<h4 id=\"user_header_text\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "</h4>\n\n";
  stack1 = ((helpers.isnt || (depth0 && depth0.isnt) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.current_user : depth0)) != null ? stack1.id : stack1), ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1), {"name":"isnt","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n\n<div id=\"user_scroller\" class=\"scroller\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.career : stack1), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n\n<div id=\"user_tabs\" class=\"fixed_navbar\">\n	<div class=\"tabs_container\" data-position=\"0\">\n		<div data-position=\"0\" data-tab=\"user_posts\" class=\"tab col-xs-4\">\n			<div class=\"tab_name\">\n				Posts\n			</div>\n		</div>\n		<div data-position=\"1\" data-tab=\"user_career\" class=\"tab col-xs-4\">\n			<div class=\"tab_name\">\n				Career\n			</div>\n		</div>\n		<div data-position=\"2\" data-tab=\"user_teams\" class=\"tab col-xs-4\">\n			<div class=\"tab_name\">\n				Teams\n			</div>\n		</div>\n	</div>\n</div>\n";
},"usePartial":true,"useData":true});