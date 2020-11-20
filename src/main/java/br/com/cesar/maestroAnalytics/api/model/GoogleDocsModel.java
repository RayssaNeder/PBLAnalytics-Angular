package br.com.cesar.maestroAnalytics.api.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.google.api.client.util.DateTime;


@Entity
@Table(name = "google_docs_files")
public class GoogleDocsModel implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	String codigo;
	String name;
	DateTime dt;
	String descricao;
	String prettyStr;
	String mimeType;
	
	
	
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public DateTime getDt() {
		return dt;
	}
	public void setDt(DateTime dt) {
		this.dt = dt;
	}
	
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getPrettyStr() {
		return prettyStr;
	}
	public void setPrettyStr(String prettyStr) {
		this.prettyStr = prettyStr;
	}
	public String getMimeType() {
		return mimeType;
	}
	public void setMimeType(String mimeType) {
		this.mimeType = mimeType;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	

}
