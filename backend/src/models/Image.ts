
// Importar essas classes são feitas para o usar o decorator
// Decorator e usado em classes, propriedades ou funções
// ManyToOne muitas imagens que pertence a um orfanato
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Orphanage from './Orphanage';

@Entity('images')
export default class image {
    // Tipo de dado que vai ser gerado nessa coluna
    @PrimaryGeneratedColumn('increment')
    id: number;
    // Column representa que isso e uma coluna de dados
    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({name: 'orphanage_id'})
    orphanage: Orphanage;
}