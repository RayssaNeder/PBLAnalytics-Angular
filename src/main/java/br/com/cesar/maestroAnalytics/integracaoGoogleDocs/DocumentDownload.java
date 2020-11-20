package br.com.cesar.maestroAnalytics.integracaoGoogleDocs;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.naming.spi.DirStateFactory.Result;

import com.google.api.client.http.FileContent;
import com.google.api.client.util.DateTime;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import com.google.api.services.drive.model.File;
import com.google.api.services.drive.model.FileList;

import br.com.cesar.maestroAnalytics.integracaoGoogleDocs.v3.ClientSecretGoogleDriveConnector;
import br.com.cesar.maestroAnalytics.integracaoGoogleDocs.v3.DriveQuickstartUpdated;
import br.com.cesar.maestroAnalytics.integracaoGoogleDocs.v3.GoogleDriveConnector;
import br.com.cesar.maestroAnalytics.integracaoGoogleDocs.v3.util.IOUtil;

public class DocumentDownload {
	
	protected static Drive driveService;
	
	public DocumentDownload() {
		try {
			this.driveService = getDriveService();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	/**
	 * @see https://developers.google.com/identity/protocols/OAuth2
	 * 
	 * @return
	 * @throws IOException
	 */
	public Drive getDriveService() throws IOException {
		String applicationName = "Drive API Java Quickstart";
		InputStream clientSecretInput = DriveQuickstartUpdated.class.getResourceAsStream("/google/drive/example/v3/client_secret.json");
		java.io.File localStoreDir = new java.io.File(System.getProperty("user.home"), ".credentials/drive-java-quickstart.json");
		List<String> scopes = Arrays.asList(DriveScopes.DRIVE, DriveScopes.DRIVE_APPDATA, DriveScopes.DRIVE_FILE);
		GoogleDriveConnector connector = new ClientSecretGoogleDriveConnector(applicationName, clientSecretInput, localStoreDir, scopes);
		return connector.getDriveService();
	}
	
	protected void setUp() {
		try {
			this.driveService = getDriveService();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	
	public static void main(String[] args) {
		System.out.println("--- --- --- test005_downloadFiles() --- --- ---");

		FileOutputStream output1 = null;
		FileOutputStream output2 = null;
		FileOutputStream output3 = null;
		try {
			// Sample code
			// String fileId = "0BwwA4oUTeiV1UVNwOHItT0xfa2M";
			// OutputStream outputStream = new ByteArrayOutputStream();
			// driveService.files().get(fileId).executeMediaAndDownloadTo(outputStream);

			// Download text file
			String fileId1 = "1sSo5YEb1dOOmoxKIjicTNEY0jkkNHYYv";
			java.io.File targetFile1 = new java.io.File("/Users/example/Downloads/test_software2/readme1.txt");
			output1 = new FileOutputStream(targetFile1);
			driveService.files().get(fileId1).executeMediaAndDownloadTo(output1);
			System.out.printf("%s is downloaded.\n", targetFile1);

			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			IOUtil.closeQuietly(output1, true);
			IOUtil.closeQuietly(output2, true);
			IOUtil.closeQuietly(output3, true);
		}
		System.out.println();
	}
	
	
	

}
