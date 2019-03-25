import { Controller, Get , Post, Header} from '@nestjs/common';

const mensaje = 'yolo';
@Controller('brands')
export class BrandsController {
    @Get()
    findAll(): string {
        return 'Brands Controller 33331' + mensaje;
    }

    @Post()
    @Header('Cache-Control', 'none')
    create(): string {
        return 'This action adds a new cat';
    }

}
