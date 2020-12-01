package br.com.cesar.maestroAnalytics.api.resource;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cesar.maestroAnalytics.api.config.property.PblAnalyticsProperty;

@RestController
@RequestMapping("/tokens")
public class TokenResource {
	
	@Autowired
	private PblAnalyticsProperty pblAnalyticsProperty;
	
	@DeleteMapping("revoke")
	public void revoke(HttpServletRequest req, HttpServletResponse resp) {
		Cookie cookie = new Cookie("refreshToken", null);
		cookie.setHttpOnly(true);
		cookie.setSecure(pblAnalyticsProperty.getSeguranca().isEnableHttps()); // TODO: emprodução será true
		cookie.setPath(req.getContextPath() + "/oauth/token");
		cookie.setMaxAge(0); //expirar agora
		
		resp.addCookie(cookie);
		resp.setStatus(HttpStatus.NO_CONTENT.value());
		
	}

}
