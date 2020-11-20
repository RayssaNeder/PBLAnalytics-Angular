package br.com.cesar.maestroAnalytics.api.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.google.api.services.drive.model.File;

import br.com.cesar.maestroAnalytics.api.model.GoogleDocsModel;
import br.com.cesar.maestroAnalytics.integracaoGoogleDocs.v3.DriveQuickstartUpdated;
import br.com.cesar.maestroAnalytics.integracaoGoogleDocs.v3.util.GoogleDriveUtil;

@Service
public class GoogleDocsService {

	public List<GoogleDocsModel> findAll() {
		
		List<File> files = DriveQuickstartUpdated.getGoogleDocsFiles();
		List<GoogleDocsModel> googleDocsModelList = new ArrayList<GoogleDocsModel>();
		
		try {
		
			for (File file : files) {
				GoogleDocsModel googleDocsModel = new GoogleDocsModel();
				
				if (!GoogleDriveUtil.isFolder(file)) {
					// continue;
				}
				if (!GoogleDriveUtil.isTextPlain(file)) {
					// continue;
				}
				googleDocsModel.setCodigo(file.getId());
				googleDocsModel.setName(file.getName());
				googleDocsModel.setDt(file.getCreatedTime());
				googleDocsModel.setDescricao(file.getDescription());
				googleDocsModel.setPrettyStr(file.toPrettyString());
				googleDocsModel.setMimeType(file.getMimeType());
				
				googleDocsModelList.add(googleDocsModel);
			}
		}catch (IOException e) {
			System.out.println("o trecho googleDocsModel.setPrettyStr(file.toPrettyString()); lançou exceção");
		}
		
		return googleDocsModelList;
	}

}
