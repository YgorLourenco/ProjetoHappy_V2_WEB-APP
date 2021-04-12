
// Importar essas classes são feitas para o usar o decorator
// Decorator e usado em classes, propriedades ou funções
// OneToMany um para muitos, um orfanato que pertence a muitas imagens
// JoinColumn Juntar colunas
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
    // Tipo de dado que vai ser gerado nessa coluna
    @PrimaryGeneratedColumn('increment')
    id: number;
    // Column representa que isso e uma coluna de dados
    @Column()
    name: string;
    @Column()
    latitude: number;
    @Column()
    longitude: number;
    @Column()
    about: string;
    @Column()
    instructions: string;
    @Column()
    opening_hours: string;
    @Column()
    open_on_weekends: boolean;
    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'orphanage_id'})
    images: Image[]; 
}