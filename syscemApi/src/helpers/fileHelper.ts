import * as fs from 'fs';
import jimp from 'jimp';

import variables from '../config/config'
import { UtilsHelper } from './utilsHelper'

export class FileHelper {

    static async writePicture(base64Data: string): Promise<string> {
        try {

            if (base64Data.indexOf('base64') == -1)
                return base64Data

            //Add 7 caracteres for discont to word base64 and ,
            let positionEndStringIdentifyBase64: number = (base64Data.indexOf('base64') + 7)
            let _base64Data = base64Data.substr(positionEndStringIdentifyBase64)

            let _directory = variables.folderStorage
            let dirExistis = await fs.existsSync(_directory)

            if (!dirExistis)
                await fs.mkdirSync(_directory)

            let filename = `${UtilsHelper.GenerateUniqueHash}.jpg`
            let fileNamePath = `${_directory}/${filename}`

            await fs.writeFileSync(fileNamePath, _base64Data, 'base64')
            console.log('Arquivo Salvo em: ', fileNamePath)
            
            let jimpResult = await jimp.read(fileNamePath)
            console.log('jimp: ', jimpResult)
            // let jimpResult = await jimp.read('https://404store.com/2017/12/08/Random-random-30798866-500-325.jpg')
            jimpResult.quality(parseInt(variables.pictureQuality.toString())).write(fileNamePath)
            console.log('arquivo: ', filename)
            return filename

        } catch (error) {
            console.log('Erro ao salvar arquivo description: ', error)
            return ''
        }
    }
}

