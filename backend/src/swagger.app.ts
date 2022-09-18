import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const initSwagger = (app: INestApplication) => {
    const swaggerConfig = new DocumentBuilder()
    .setTitle('MP API')
    .setDescription('FISCALIAS API') 
    .setVersion('2.0')
    .build();
    const document = SwaggerModule.createDocument(app,swaggerConfig);
    SwaggerModule.setup('api/docs',app, document,{
        swaggerOptions:{
            filter:true
        }
    })
}