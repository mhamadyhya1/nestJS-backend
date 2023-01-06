"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const dist_1 = require("@nestjs/swagger/dist");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, forbidUnknownValues: false }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Swagger UI')
        .setDescription("Maxiphy Assesment done by Mohammad Yahya")
        .setVersion('1')
        .build();
    const document = dist_1.SwaggerModule.createDocument(app, config);
    dist_1.SwaggerModule.setup('api', app, document);
    app.enableCors();
    await app.listen(3061);
}
bootstrap();
function UseGlobalGuards(AuthGuard) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=main.js.map