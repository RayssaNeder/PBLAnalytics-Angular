package br.com.cesar.maestroAnalytics.api.model;

import java.io.Serializable;
import java.util.Map;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.google.api.client.util.DateTime;
import com.google.api.services.drive.model.User;

/*@Entity
@Table(name = "google_docs_files")*/
public class GoogleDocsModel implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/*
	 * @Id
	 * 
	 * @GeneratedValue(strategy = GenerationType.IDENTITY)
	 */
	String codigo;
	String name;
	DateTime dt;
	String description;
	String prettyStr;
	String mimeType;
	Map<String, String> properties;
	String fileExtension;
	String headRevisionId;
	User lastModifyingUser;
	String md5Checksum;
	String kind;

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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Map<String, String> getProperties() {
		return properties;
	}

	public void setProperties(Map<String, String> properties) {
		this.properties = properties;
	}

	public String getFileExtension() {
		return fileExtension;
	}

	public void setFileExtension(String fileExtension) {
		this.fileExtension = fileExtension;
	}

	public String getHeadRevisionId() {
		return headRevisionId;
	}

	public void setHeadRevisionId(String headRevisionId) {
		this.headRevisionId = headRevisionId;
	}

	

	public User getLastModifyingUser() {
		return lastModifyingUser;
	}

	public void setLastModifyingUser(User lastModifyingUser) {
		this.lastModifyingUser = lastModifyingUser;
	}

	public String getMd5Checksum() {
		return md5Checksum;
	}

	public void setMd5Checksum(String md5Checksum) {
		this.md5Checksum = md5Checksum;
	}

	public String getKind() {
		return kind;
	}

	public void setKind(String kind) {
		this.kind = kind;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
