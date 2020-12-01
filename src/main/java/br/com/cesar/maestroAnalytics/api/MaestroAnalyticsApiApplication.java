package br.com.cesar.maestroAnalytics.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import br.com.cesar.maestroAnalytics.api.config.property.PblAnalyticsProperty;

@SpringBootApplication
@EnableConfigurationProperties(PblAnalyticsProperty.class)
public class MaestroAnalyticsApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MaestroAnalyticsApiApplication.class, args);
	}

}
